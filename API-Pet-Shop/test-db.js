import 'dotenv/config';
import postgres from 'postgres';

async function testDbConnection() {
  const dbUrl = process.env.DATABASE_URL;

  if (!dbUrl) {
    console.error('ERRO: A variável de ambiente DATABASE_URL não foi encontrada!');
    console.error('Certifique-se de que o arquivo .env está na raiz do projeto e contém a DATABASE_URL.');
    return;
  }

  console.log('Tentando conectar ao banco de dados...');
  console.log('URL (sem a senha):', dbUrl.replace(/:(.*)@/, ':********@'));

  const sql = postgres(dbUrl);

  try {
    const result = await sql`SELECT 1 as test;`;
    if (result && result[0] && result[0].test === 1) {
      console.log('\nSUCESSO! Conexão com o banco de dados bem-sucedida! ✅');
    } else {
      console.error('\nERRO INESPERADO: A conexão parece ter funcionado, mas a resposta não foi a esperada.');
    }
  } catch (error) {
    console.error('\nFALHA NA CONEXÃO! Não foi possível conectar ao banco de dados. ❌');
    console.error('Detalhes do erro:', error.message);
    console.log('\n---');
    console.log('Possíveis causas:');
    console.log('1. A senha no arquivo .env está incorreta.');
    console.log('2. O Supabase está bloqueando o IP do nosso servidor (verifique as Network Restrictions).');
    console.log('3. O projeto no Supabase está pausado.');

  } finally {
    await sql.end();
    console.log('\nConexão encerrada.');
  }
}

testDbConnection();
