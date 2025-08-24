//Um objeto fallback de outro objeto
//O prototype de um objeto criado do zero é o Object

const pessoa = {
    maos: 2,
}

console.log(Object.getPrototyoeOf(pessoa));
console.log(Object.getPrototyoeOf(pessoa) === Object.prototype);

console.log(pessoa.hasOwnProperty('maos'));