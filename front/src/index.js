import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import routes from '../../API-Pet-Shop/src/routes/index.js';
import { setupSwagger } from './config/swagger.js';
import { errorHandler } from '../../API-Pet-Shop/src/middlewares/errorHandler.js';
const app = express();
// CORS Configuration
const corsOrigins = process.env.CORS_ORIGINS?.split(',') || ['http://localhost:5173'];
app.use(cors({
    origin: corsOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
// Parse JSON
app.use(express.json());
// Swagger Documentation
setupSwagger(app);
// Health Check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});
// Routes
app.use('/api', routes);
// Error Handler (deve ser o último middleware)
app.use(errorHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 API rodando na porta ${PORT}`);
    console.log(`📚 Swagger disponível em http://localhost:${PORT}/api-docs`);
});
//# sourceMappingURL=index.js.map