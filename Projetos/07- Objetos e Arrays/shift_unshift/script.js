//deletam e adicionam elementos no inicio do array

let carros = ['BMW','Mercedes','Audi'];

let removerPrimeiroCarro = carros.shift();

console.log(removerPrimeiroCarro);
console.log(carros);

carros.unshift("VW");
console.log(carros);