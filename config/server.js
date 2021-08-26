// Esse arquivo tera todas as configuracoes iniciais

var express = require('express');

const app = express();
app.use(express.json())


// para selecionar o caminho, levei em consideracao que ele vai partir a partir do app.js e não desse arquivo.
module.exports = app;

