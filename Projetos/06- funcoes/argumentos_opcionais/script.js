function soma(a,b){
    if(a === undefined || b === undefined){
        console.log("esta funcção precisa ter dois argumentos");
    } else {
        return a + b;
    }
}

console.log(soma(10,30));
console.log(soma(1));

function saudacao(nome,idade){
    if (idade === undefined){
        console.log("olá " + nome);
    } else {
        console.log("olá " + nome + "você tem " + idade + "anos!" );
    }
}

saudacao("bruno");
saudacao("bruno",25);