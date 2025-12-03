// src/services/authService.ts

// MUDANÇA AQUI: Usar importação nomeada com chaves { prisma }
import { prisma } from "../db/prisma/prisma.ts";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const authService = {
 async register(data: {
 email: string;
  senha: string;
  nome: string;
  telefone: string;
 endereco: string;
 userType: 'FUNCIONARIO' | 'CLIENTE';
  }) {
 const hashedPassword = await bcrypt.hash(data.senha, 10);

 if (data.userType === 'CLIENTE') {
 const existing = await prisma.cliente.findFirst({ where: { email: data.email } });
  if (existing) throw new Error('Email já cadastrado');

 const cliente = await prisma.cliente.create({
  data: {
  email: data.email,
  senha: hashedPassword,
  nome: data.nome,
  telefone: data.telefone,
  endereco: data.endereco
  }
 });
  return { id: cliente.id, email: cliente.email, userType: 'CLIENTE' };
 } else {
  const existing = await prisma.funcionario.findFirst({ where: { email: data.email } });
  if (existing) throw new Error('Email já cadastrado');

const funcionario = await prisma.funcionario.create({
  data: {
  email: data.email,
  senha: hashedPassword,
  nome: data.nome,
  telefone: data.telefone,
  endereco: data.endereco
 }
});
 return { id: funcionario.id, email: funcionario.email, userType: 'FUNCIONARIO' };
}
 },

async login(email: string, senha: string) {
 // Tenta encontrar como cliente
 let user = await prisma.cliente.findFirst({ where: { email } });
 let userType = 'CLIENTE';

 // Se não encontrou, tenta como funcionário
if (!user) {
 user = await prisma.funcionario.findFirst({ where: { email } });
userType = 'FUNCIONARIO';
}

 if (!user) throw new Error('Credenciais inválidas');

 const validPassword = await bcrypt.compare(senha, user.senha);
 if (!validPassword) throw new Error('Credenciais inválidas');

 // A variável de ambiente JWT_SECRET é necessária!
 const jwtSecret = process.env.JWT_SECRET;
 if (!jwtSecret) throw new Error('JWT_SECRET não está definida nas variáveis de ambiente.');


const token = jwt.sign(
 { userId: user.id, userType },
 jwtSecret, // Use a variável verificada
 { expiresIn: '7d' }
 );

 return {
 token,
 user: { id: user.id, email: user.email, nome: user.nome, userType }
 };
 }
};
export default authService;