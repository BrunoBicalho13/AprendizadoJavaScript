const dia = /\d\d/;

console.log(dia.test("2019")); // true pq tem dois digitos 
console.log(dia.test("asd")); // false
console.log(dia.test("20")); // true
console.log(dia.test("05") && "05".length == 2); // dois digitos com 2 numeros 

const palavrasTresLetras = "/\w\w\w/";
console.log(palavrasTresLetras.test("asd"));
console.log(palavrasTresLetras.test("asdd"));
console.log(palavrasTresLetras.test("assd"));