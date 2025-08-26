//nos generators as ações podem ser pausadas e continuadas depois
//Se usa o function*, yield e next

function* criadorId(){
    let id = 0;
    while(true){
        yield id++;
    }
}

let criaId = criadorId();

console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);

console.log(criaId.next());