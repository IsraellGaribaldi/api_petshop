import prisma from '../lib/prisma.js';

export const dashboardService = {
  async getResumo() {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const amanha = new Date(hoje);
    amanha.setDate(amanha.getDate() + 1);

    const inicioMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
    const fimMes = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0);

    const [
      totalClientes,
      totalPets,
      totalProdutos,
      produtosBaixoEstoque,
      atendimentosHoje,
      atendimentosMes,
      vendasHoje,
      vendasMes,
    ] = await Promise.all([
      prisma.cliente.count(),
      prisma.pet.count(),
      prisma.produto.count({ where: { ativo: true } }),
      prisma.produto.count({ where: { estoque: { lte: 10 }, ativo: true } }),
      prisma.atendimento.count({
        where: { dataHora: { gte: hoje, lt: amanha } },
      }),
      prisma.atendimento.count({
        where: { dataHora: { gte: inicioMes, lte: fimMes } },
      }),
      prisma.venda.aggregate({
        where: { createdAt: { gte: hoje, lt: amanha }, status: 'pago' },
        _sum: { total: true },
        _count: true,
      }),
      prisma.venda.aggregate({
        where: { createdAt: { gte: inicioMes, lte: fimMes }, status: 'pago' },
        _sum: { total: true },
        _count: true,
      }),
    ]);

    return {
      clientes: totalClientes,
      pets: totalPets,
      produtos: {
        total: totalProdutos,
        baixoEstoque: produtosBaixoEstoque,
      },
      atendimentos: {
        hoje: atendimentosHoje,
        mes: atendimentosMes,
      },
      vendas: {
        hoje: {
          quantidade: vendasHoje._count,
          valor: vendasHoje._sum.total || 0,
        },
        mes: {
          quantidade: vendasMes._count,
          valor: vendasMes._sum.total || 0,
        },
      },
    };
  },

  async getAtendimentosRecentes(limite: number = 5) {
    return prisma.atendimento.findMany({
      take: limite,
      orderBy: { createdAt: 'desc' },
      include: {
        pet: { select: { nome: true } },
        servico: { select: { nome: true } },
        funcionario: { select: { nome: true } },
      },
    });
  },

  async getVendasRecentes(limite: number = 5) {
    return prisma.venda.findMany({
      take: limite,
      orderBy: { createdAt: 'desc' },
      include: {
        cliente: { select: { nome: true } },
        _count: { select: { itens: true } },
      },
    });
  },

  async getEspeciesPets() {
    const especies = await prisma.pet.groupBy({
      by: ['especie'],
      _count: { especie: true },
    });

    return especies.map(e => ({
      especie: e.especie,
      quantidade: e._count.especie,
    }));
  },

  async getVendasPorDia(dias: number = 7) {
    const dataInicio = new Date();
    dataInicio.setDate(dataInicio.getDate() - dias);
    dataInicio.setHours(0, 0, 0, 0);

    const vendas = await prisma.venda.findMany({
      where: {
        createdAt: { gte: dataInicio },
        status: 'pago',
      },
      select: {
        total: true,
        createdAt: true,
      },
    });

    // Agrupar por dia
    const porDia: Record<string, { quantidade: number; valor: number }> = {};
    
    for (let i = 0; i < dias; i++) {
      const data = new Date();
      data.setDate(data.getDate() - i);
      const chave = data.toISOString().split('T')[0];
      porDia[chave] = { quantidade: 0, valor: 0 };
    }

    vendas.forEach(venda => {
      const chave = venda.createdAt.toISOString().split('T')[0];
      if (porDia[chave]) {
        porDia[chave].quantidade++;
        porDia[chave].valor += venda.total;
      }
    });

    return Object.entries(porDia)
      .map(([data, dados]) => ({ data, ...dados }))
      .sort((a, b) => a.data.localeCompare(b.data));
  },
};
