// Configuracoes do express

var express = require('express');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3333;

app.use(cors())

app.use(express.json())

const {funcCadastro} = require("./app/routes/cadastro")
const {funcPegarLocalizacao} = require("./app/routes/pegarLocalizacao")
const {funcVerificarCPF} = require("./app/routes/verificarCPF")

app.post("/cadastro", funcCadastro)
app.post("/verificarCPF", funcVerificarCPF)
app.post("/pegarLocalizacao", funcPegarLocalizacao)

app.listen(port, function () {
    console.log("Servidor rodando na porta 3000");
})