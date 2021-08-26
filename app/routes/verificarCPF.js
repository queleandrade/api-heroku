
module.exports = function(app){

    app.get("/verificarCPF", function(req, res){

        // npm i mysql --save
        var MySQL = require('mysql');

        var conexao = MySQL.createConnection({ // minha configuração do XAMPP
            host : 'localhost',
            user: 'root',
            password: '',
            database: 'ambevtech'
        });

        // Ao executar um Query executa exatamente uma funcao.
        conexao.query("SELECT * FROM jobesnet WHERE cpf = '".concat(req.body.cpf)+"'", function (err, result, fields) {

            if (result.length>0){ // se resultado tiver dados, ele será maior q 0
                return res.status(200).send({
                    situacao: true,
                    nome: result[0].nome
                })
            }
            else{
                return res.status(404).send({
                    situacao: false
                })
            }
        });
    })
}