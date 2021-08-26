// Esse arquivo tera todas as configuracoes iniciais

var express = require('express');

const app = express();
app.use(express.json())
app.get("/", (rec,res,next)=>{
    return res.json({mensagem:"deu certo"})
})

// para selecionar o caminho, levei em consideracao que ele vai partir a partir do app.js e não desse arquivo.
module.exports = app;

