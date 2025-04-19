/* eslint-disable no-console */
import express from 'express';
import corsMiddleware from './middleware/cors';
import routes from './routes';
import { errorHandler } from './middleware/errorHandler';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(corsMiddleware);

routes(app);

app.use(errorHandler);

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));

module.exports = app;