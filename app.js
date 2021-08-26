// Configuracoes do express
var app = require("./config/server");
const port    = process.env.PORT || 3333;
// Instanciei as rotas
var cadastro = require("./app/routes/cadastro");
var pegarLocalizacao = require("./app/routes/pegarLocalizacao");
var verificarCPF = require("./app/routes/verificarCPF");

app.get("/", (rec,res,next)=>{
    return res.json({mensagem:"deu certo"})
})

//Iniciando as rotas
cadastro(app);
pegarLocalizacao(app);
verificarCPF(app);


app.listen(port,function(){
    console.log("Servidor rodando na porta 3000");
})