// prisma.config.ts
import { defineConfig } from 'prisma/config'

export default defineConfig({
  // A URL de conexão da database principal vai diretamente aqui.
  datasource: {
    url: process.env.DATABASE_URL!,
    // Se você usa shadow database para migrações:
    // shadowDatabaseUrl: process.env.SHADOW_DATABASE_URL, 
  },
})