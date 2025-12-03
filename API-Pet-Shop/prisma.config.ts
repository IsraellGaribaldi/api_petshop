// prisma.config.ts
// Use require para carregar e executar o método config() do dotenv
require('dotenv').config(); 

import { defineConfig } from '@prisma/config';

export default defineConfig({
    schema: './prisma/schema.prisma',
    
    datasource: {
        url: process.env.DATABASE_URL!, 
    },
});