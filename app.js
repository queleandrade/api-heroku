// Configuracoes do express
var app = require("./config/server");

// Instanciei as rotas
var cadastro = require("./app/routes/cadastro");
var pegarLocalizacao = require("./app/routes/pegarLocalizacao");
var verificarCPF = require("./app/routes/verificarCPF");

//Iniciando as rotas
cadastro(app);
pegarLocalizacao(app);
verificarCPF(app);


app.listen(3000,function(){
    console.log("Servidor rodando na porta 3000");
})