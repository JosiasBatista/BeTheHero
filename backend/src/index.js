const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//Configurando o cors
app.use(cors());

//Informando ao express que o corpo das requisições será enviado no formato de JSON
app.use(express.json());

//Inicializando as rotas da aplicação
app.use(routes);

app.listen(3333);
