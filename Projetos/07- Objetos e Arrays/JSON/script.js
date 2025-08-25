//utilização para comunicação entre serviços

let pessoa = {
    "nome": "Bruno",
    "idade": 28,
    "Profissao": "Programador",
    "hobbies": ["Video Game", "Leitura", "Correr"]
};

console.log(pessoa.nome);
console.log(pessoa.idade);

//Podemos converter o JSON para uma string de forma fácil

let pessoaTexto = JSON.stringify.pessoa;

console.log(pessoaTexto);

let pessoaJSON = JSONparse(pessoaTexto);

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);

