module.exports = function(app){

    app.post("/cadastro", function(req, res){

        // npm i mysql --save
        var MySQL = require('mysql');

        var conexao = MySQL.createConnection({ // minha configuração do XAMPP
            host : process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASS || '',
            database: process.env.DB_NAME || 'ambevtech'
        });

        // Texto formal da requisicao MySQL.
        const sql = "INSERT INTO jobesnet(nome, cargo, bairro, estadoCivil, sexo, endereco, diaNascimento,mesNascimento, anoNascimento, cidade, cep, telefone1, telefone2, celular, contato, email, identidade,cpf, habilitacao, veiculo) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";

        // Os valores que serão postos que vem da requisicao.
        const values = [req.body.nome, req.body.cargo, req.body.bairro, req.body.estadoCivil, req.body.sexo, req.body.endereco, req.body.diaNascimento,
        req.body.mesNascimento, req.body.anoNascimento, req.body.cidade, req.body.cep, req.body.telefone1, req.body.telefone2, req.body.celular, req.body.contato,
        req.body.email, req.body.identidade, req.body.cpf, req.body.habilitacao, req.body.veiculo];
        console.log(values);
        conexao.query(sql,values, function(error, result){
            
            if(result){
                return res.status(200).send({
                    situacao: true,
                    mensagem: result
                });
            }
            else{
                return res.status(404).send({
                    situacao: false,
                    mensagem: error
                });
            }
        })
    })
  
}
