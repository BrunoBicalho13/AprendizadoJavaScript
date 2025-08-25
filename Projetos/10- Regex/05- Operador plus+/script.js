//pode se repetir mais de uma vez

const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test("123213"));
console.log(umOuMaisNumeros.test(" "));
console.log(umOuMaisNumeros.test("adsdas"));
console.log(umOuMaisNumeros.test("11113131313123231313"));