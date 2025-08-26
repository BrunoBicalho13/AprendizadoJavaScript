//São ações asincronas que podem produzir um valor em algum momento do codigo

let p = Promise.resolve(5);

console.log("Outros Códigos");

console.log(p);

p.then((value) => {return value + 5}) 
 .then((value) => {console.log(value)});



//Falha nas promises -> reter o erro com um método chamado catch

let b = Promise.resolve(new Error("Não deu certo"));

console.log("lalala");

p.then((value) => console.log(value))
 .catch(reason => console.log("Falhou : " + reason));

//Rejeitando Promises -> Reject

function verificarNumero(num){
    
    return new Promise((resolve,reject) => {
        if(num == 2){
            resolve(console.log(`O numero é %{num}`));
        } else {
            reject(new Error("Falhou"));
        }
    });
}

verificarNumero(2);
verificarNumero(3);

