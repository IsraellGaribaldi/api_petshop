// prisma/seed.ts

import { prisma } from '../src/db/prisma/prisma.js'; 

const funcionarioPassword = 'senhafuncionario123';
const clientePassword = 'senhacliente123';

const hashedPasswordFuncionario = funcionarioPassword;
const hashedPasswordCliente = clientePassword;

async function main() {
  console.log('Iniciando o seeding com cliente Prisma importado...');

  const funcionarioPadrao = await prisma.funcionario.upsert({
    where: { id: 1 },
    update: {},
    create: {
      nome: 'Funcionário Padrão',
      telefone: '83999999999',
      email: 'funcionario@petshop.com',
      senha: hashedPasswordFuncionario,
      endereco: 'Rua Principal, 100',
    },
  });
  console.log(`Funcionario criado: ${funcionarioPadrao.email}`);

  const clienteTeste = await prisma.cliente.upsert({
    where: { id: 1 },
    update: {},
    create: {
      nome: 'Cliente Teste',
      telefone: '83988888888',
      email: 'cliente@teste.com',
      senha: hashedPasswordCliente,
      endereco: 'Avenida Secundária, 50',
    },
  });
  console.log(`Cliente Teste criado: ${clienteTeste.email}`);

  const petTeste = await prisma.pet.upsert({
    where: { id: 1 },
    update: { nome: 'Rex' },
    create: {
      nome: 'Rex',
      especie: 'Cachorro',
      raca: 'Golden Retriever',
      sexo: 'M',
      idade: 3,
      idcliente: clienteTeste.id,
    },
  });
  console.log(`Pet criado: ${petTeste.nome}`);

  const solicitacao = await prisma.solicitacao.create({
    data: {
      descricao: 'Quero agendar uma tosa para o Rex.',
      status: 'PENDENTE',
      clienteId: clienteTeste.id,
    },
  });
  console.log(`Solicitação criada: ${solicitacao.id}`);
  
  const agendamento = await prisma.agendamento.create({
    data: {
      data: new Date(Date.now() + 86400000),
      servico: 'Banho e Tosa',
      clienteId: clienteTeste.id,
      petId: petTeste.id,
    },
  });
  console.log(`Agendamento criado: ${agendamento.servico}`);
  
   const atendimento = await prisma.atendimento.create({
    data: {
      tipo: 'Consulta de Rotina',
      idpet: petTeste.id,
      idfuncionario: funcionarioPadrao.id,
    },
  });
  console.log(`Atendimento criado: ${atendimento.tipo}`);
}

main()
  .catch((e) => {
    console.error('ERRO FATAL DURANTE O SEEDING:', e);
    process.exit(1);
  })
  .finally(async () => {
    console.log('Seeding concluído.');
  });