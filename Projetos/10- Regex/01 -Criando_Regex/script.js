//Defidir o padrão por meio da Regex
//Utilizar o Metodo test() para verificar se o padrão é retornado

const reg1 = new RegExp('bola');

console.log(reg1.test("tem bola?")); //true
console.log(reg1.test("Não tem")); // false

const reg2 = /bola/;

console.log(reg1.test("tem bola?")); //true
console.log(reg1.test("Não tem")); // false

let text = 'Tem bola na cesta';
console.log(reg2.test(text));

console.log(/quadrado/.test("Onde tem um quadrado"));
console.log(/quadrado/.test("123456789quadrado987654321"));

// [] definem um conjunto de caracteres para encontrar por regex
//Se pode definir um intervalo com - 

const reg3 = /[12345]/;
console.log(reg3.test("Temos o numero 6")); //false
console.log(reg3.test("Temos o numero 2"));//true
console.log(reg3.test("Temos o numero 23"));//true - um erro que pode acontecer
console.log(reg3.test("Temos o numero 26"));//true - um erro que pode acontecer
console.log(reg3.test("Temos o numero 60"));//false

const reg4 = /[0-9]/; //Verifica se existe um numero na frase

console.log(reg4.test("Temos o numero 65")); //true


