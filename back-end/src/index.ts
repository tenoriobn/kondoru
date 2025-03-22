import express from 'express';
import corsMiddleware from './middleware/corsMiddleware'
import routes from './routes';

const app = express();
const port = 8080;

app.use(corsMiddleware);

routes(app);

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));

module.exports = app;