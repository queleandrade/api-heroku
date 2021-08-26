// Esse arquivo tera todas as configuracoes iniciais

var express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.get("/", (rec,res,next)=>{
    return res.json({mensagem:"deu certo"})
})
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 

// para selecionar o caminho, levei em consideracao que ele vai partir a partir do app.js e não desse arquivo.
module.exports = app;

