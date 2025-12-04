import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...');

  // Limpar dados existentes (opcional - cuidado em produção!)
  await prisma.itemVenda.deleteMany();
  await prisma.venda.deleteMany();
  await prisma.atendimento.deleteMany();
  await prisma.pet.deleteMany();
  await prisma.cliente.deleteMany();
  await prisma.funcionario.deleteMany();
  await prisma.servico.deleteMany();
  await prisma.produto.deleteMany();

  // Criar Funcionários
  const senhaHash = await bcrypt.hash('123456', 10);
  
  const funcionarios = await prisma.funcionario.createMany({
    data: [
      {
        nome: 'Ana Costa',
        telefone: '(11) 99999-0001',
        email: 'ana@petshop.com',
        endereco: 'Rua Principal, 100 - São Paulo',
        cargo: 'Veterinária',
        salario: 8500.00,
        senha: senhaHash,
      },
      {
        nome: 'Carlos Silva',
        telefone: '(11) 99999-0002',
        email: 'carlos@petshop.com',
        endereco: 'Av. Central, 200 - São Paulo',
        cargo: 'Tosador',
        salario: 3500.00,
        senha: senhaHash,
      },
      {
        nome: 'Marina Santos',
        telefone: '(11) 99999-0003',
        email: 'marina@petshop.com',
        endereco: 'Rua das Flores, 300 - São Paulo',
        cargo: 'Atendente',
        salario: 2800.00,
        senha: senhaHash,
      },
    ],
  });
  console.log(`✅ ${funcionarios.count} funcionários criados`);

  // Criar Clientes
  const clientes = await prisma.cliente.createMany({
    data: [
      {
        nome: 'Maria Silva',
        telefone: '(11) 98888-1234',
        email: 'maria@email.com',
        endereco: 'Rua das Flores, 123 - São Paulo',
        cpf: '123.456.789-00',
      },
      {
        nome: 'João Santos',
        telefone: '(11) 97777-5678',
        email: 'joao@email.com',
        endereco: 'Av. Brasil, 456 - São Paulo',
        cpf: '987.654.321-00',
      },
      {
        nome: 'Ana Oliveira',
        telefone: '(11) 96666-9012',
        email: 'ana.oliveira@email.com',
        endereco: 'Rua do Sol, 789 - São Paulo',
        cpf: '456.789.123-00',
      },
      {
        nome: 'Pedro Lima',
        telefone: '(11) 95555-3456',
        email: 'pedro@email.com',
        endereco: 'Rua da Lua, 321 - São Paulo',
        cpf: '321.654.987-00',
      },
    ],
  });
  console.log(`✅ ${clientes.count} clientes criados`);

  // Buscar clientes para relacionar com pets
  const clientesList = await prisma.cliente.findMany();

  // Criar Pets
  const pets = await prisma.pet.createMany({
    data: [
      {
        nome: 'Thor',
        especie: 'Cachorro',
        raca: 'Golden Retriever',
        sexo: 'Macho',
        idade: 3,
        peso: 32.5,
        observacoes: 'Muito brincalhão, gosta de água',
        clienteId: clientesList[0].id,
      },
      {
        nome: 'Luna',
        especie: 'Gato',
        raca: 'Siamês',
        sexo: 'Fêmea',
        idade: 2,
        peso: 4.2,
        observacoes: 'Tímida com estranhos',
        clienteId: clientesList[0].id,
      },
      {
        nome: 'Rex',
        especie: 'Cachorro',
        raca: 'Pastor Alemão',
        sexo: 'Macho',
        idade: 5,
        peso: 38.0,
        observacoes: 'Precisa de tosa regular',
        clienteId: clientesList[1].id,
      },
      {
        nome: 'Mimi',
        especie: 'Gato',
        raca: 'Persa',
        sexo: 'Fêmea',
        idade: 4,
        peso: 5.5,
        observacoes: 'Alérgica a alguns produtos',
        clienteId: clientesList[2].id,
      },
      {
        nome: 'Bob',
        especie: 'Cachorro',
        raca: 'Bulldog Francês',
        sexo: 'Macho',
        idade: 2,
        peso: 12.0,
        clienteId: clientesList[3].id,
      },
    ],
  });
  console.log(`✅ ${pets.count} pets criados`);

  // Criar Serviços
  const servicos = await prisma.servico.createMany({
    data: [
      {
        nome: 'Banho Simples',
        descricao: 'Banho completo com shampoo e condicionador',
        preco: 50.00,
        duracao: 60,
      },
      {
        nome: 'Banho e Tosa',
        descricao: 'Banho completo com tosa higiênica',
        preco: 80.00,
        duracao: 90,
      },
      {
        nome: 'Tosa Completa',
        descricao: 'Tosa completa com acabamento',
        preco: 70.00,
        duracao: 60,
      },
      {
        nome: 'Consulta Veterinária',
        descricao: 'Consulta de rotina com veterinário',
        preco: 150.00,
        duracao: 30,
      },
      {
        nome: 'Vacinação',
        descricao: 'Aplicação de vacinas (vacina não inclusa)',
        preco: 40.00,
        duracao: 15,
      },
      {
        nome: 'Hidratação de Pelos',
        descricao: 'Tratamento de hidratação profunda',
        preco: 60.00,
        duracao: 45,
      },
    ],
  });
  console.log(`✅ ${servicos.count} serviços criados`);

  // Criar Produtos
  const produtos = await prisma.produto.createMany({
    data: [
      {
        nome: 'Ração Premium Cães Adultos 15kg',
        descricao: 'Ração super premium para cães adultos',
        preco: 189.90,
        estoque: 50,
        categoria: 'Alimentação',
        codigoBarra: '7891234567890',
      },
      {
        nome: 'Ração Premium Gatos 10kg',
        descricao: 'Ração super premium para gatos',
        preco: 159.90,
        estoque: 40,
        categoria: 'Alimentação',
        codigoBarra: '7891234567891',
      },
      {
        nome: 'Shampoo Neutro 500ml',
        descricao: 'Shampoo para cães e gatos',
        preco: 35.90,
        estoque: 100,
        categoria: 'Higiene',
        codigoBarra: '7891234567892',
      },
      {
        nome: 'Coleira Antipulgas',
        descricao: 'Coleira contra pulgas e carrapatos',
        preco: 79.90,
        estoque: 60,
        categoria: 'Saúde',
        codigoBarra: '7891234567893',
      },
      {
        nome: 'Brinquedo Mordedor',
        descricao: 'Mordedor de borracha resistente',
        preco: 29.90,
        estoque: 80,
        categoria: 'Brinquedos',
        codigoBarra: '7891234567894',
      },
      {
        nome: 'Cama Pet Média',
        descricao: 'Cama confortável para pets médios',
        preco: 129.90,
        estoque: 25,
        categoria: 'Acessórios',
        codigoBarra: '7891234567895',
      },
      {
        nome: 'Petisco Dental',
        descricao: 'Petisco para limpeza dental',
        preco: 24.90,
        estoque: 120,
        categoria: 'Alimentação',
        codigoBarra: '7891234567896',
      },
    ],
  });
  console.log(`✅ ${produtos.count} produtos criados`);

  // Buscar dados para criar atendimentos
  const petsList = await prisma.pet.findMany();
  const funcionariosList = await prisma.funcionario.findMany();
  const servicosList = await prisma.servico.findMany();

  // Criar Atendimentos
  const hoje = new Date();
  const atendimentos = await prisma.atendimento.createMany({
    data: [
      {
        dataHora: new Date(hoje.getTime() + 24 * 60 * 60 * 1000), // amanhã
        status: 'agendado',
        observacoes: 'Cliente solicita tosa baixa',
        petId: petsList[0].id,
        funcionarioId: funcionariosList[1].id,
        servicoId: servicosList[1].id,
      },
      {
        dataHora: new Date(hoje.getTime() + 2 * 24 * 60 * 60 * 1000), // depois de amanhã
        status: 'agendado',
        petId: petsList[2].id,
        funcionarioId: funcionariosList[1].id,
        servicoId: servicosList[0].id,
      },
      {
        dataHora: new Date(hoje.getTime() - 24 * 60 * 60 * 1000), // ontem
        status: 'concluido',
        petId: petsList[1].id,
        funcionarioId: funcionariosList[0].id,
        servicoId: servicosList[3].id,
      },
    ],
  });
  console.log(`✅ ${atendimentos.count} atendimentos criados`);

  // Buscar produtos para criar vendas
  const produtosList = await prisma.produto.findMany();

  // Criar Vendas com Itens
  const venda1 = await prisma.venda.create({
    data: {
      total: 249.70,
      formaPagto: 'cartao_credito',
      status: 'pago',
      clienteId: clientesList[0].id,
      itens: {
        create: [
          {
            quantidade: 1,
            precoUnit: 189.90,
            subtotal: 189.90,
            produtoId: produtosList[0].id,
          },
          {
            quantidade: 2,
            precoUnit: 29.90,
            subtotal: 59.80,
            produtoId: produtosList[4].id,
          },
        ],
      },
    },
  });

  const venda2 = await prisma.venda.create({
    data: {
      total: 115.80,
      formaPagto: 'pix',
      status: 'pago',
      clienteId: clientesList[1].id,
      itens: {
        create: [
          {
            quantidade: 1,
            precoUnit: 35.90,
            subtotal: 35.90,
            produtoId: produtosList[2].id,
          },
          {
            quantidade: 1,
            precoUnit: 79.90,
            subtotal: 79.90,
            produtoId: produtosList[3].id,
          },
        ],
      },
    },
  });
  console.log(`✅ 2 vendas criadas com itens`);

  console.log('🎉 Seed concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
