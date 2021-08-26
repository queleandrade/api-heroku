## Requisicao VIACEP

rota: pegarLocalizacao

Obs: É de suma importancia a garantia dos 8 digitos na requisicao

Corpo da requisicao:
{
    "cep": "44420000"
}


Se tiver errado ou nao existir:
{
    encontrado: false
}


Se encontrar:
{
    encontrado: true,
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: ",
    uf: "",
    ibge: "",
    gia: "",
    ddd: "",
    siafi: ""
}

## Requisicao cadastro

rota: cadastro

Corpo da requisicao:
{
    "nome": "",
    "cargo": "",
    "bairro": "",
    "estadoCivil": "",
    "sexo": "",
    "endereco": "",
    "diaNascimento": "",
    "mesNascimento": "",
    "anoNascimento": "",
    "cidade": "",
    "cep": "",
    "telefone1": "",
    "telefone2": "",
    "celular": "",
    "contato": "",
    "email": "",
    "identidade": "",
    "cpf": "",
    "habilitacao": "",
    "veiculo": ""
}

Se tiver errado :
{
    situacao: false,
    mensagem: [] // Essa mensagem será o retorno do servidor (Recomendado para DEBUG)
}


Se encontrar:
{
    situacao: true,
    mensagem: [] // Essa mensagem será, tambem, o retorno do servidor (Recomendado para DEBUG)
}


## Requisicao do CPF

rota: verificarCPF

Corpo da requisicao:
{
    "cpf": ""
}

Se encontrar
{
    situacao: true,
    nome: ""
}

Se não encontrar:
{
    situacao: false
}

