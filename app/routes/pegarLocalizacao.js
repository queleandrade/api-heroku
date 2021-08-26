module.exports = function(app){

    var axios = require("axios");

    app.post("/pegarLocalizacao", function(req, res){
        axios.get("https://viacep.com.br/ws/".concat(req.body.cep).concat('/json/')).then((response) => {
            if(response.data.erro  == true){
                return res.status(404).send({
                    encontrado: false
                })
            }
            else{
                return res.status(200).send({
                    encontrado: true,
                    cep: response.data.cep,
                    logradouro: response.data.logradouro,
                    complemento: response.data.complemento,
                    bairro: response.data.bairro,
                    localidade: response.data.localidade,
                    uf: response.data.uf,
                    ibge: response.data.ibge,
                    gia: response.data.gia,
                    ddd: response.data.ddd,
                    siafi: response.data.siafi
                });
            }

        });

    })
}
