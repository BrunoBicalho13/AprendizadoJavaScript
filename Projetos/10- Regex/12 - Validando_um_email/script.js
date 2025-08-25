const validaEmail = /\w+@\w+\.\w+/;

console.log(validaEmail.test("matheus@gmail.com"));
console.log(validaEmail.test("matheus@gmail"));
console.log(validaEmail.test("gmail.com"));

