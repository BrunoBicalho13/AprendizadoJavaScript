const validaData = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validaData.test('25/12/2025'));
console.log(validaData.test('5/2/2000'));
console.log(validaData.test('05-02-2000'));
console.log(validaData.test('5/2/00'));
