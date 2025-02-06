const express = require('express');
const routes = require('./routes');
const corsMiddleware = require('./middleware/corsMiddleware'); 

const app = express();
const port = 8080;

app.use(corsMiddleware);

routes(app);

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));

module.exports = app;