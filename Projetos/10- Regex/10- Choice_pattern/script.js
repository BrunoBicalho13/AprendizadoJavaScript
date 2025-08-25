const reg = /\w+:(Matheus | Joao | Maria)/; // Nome: nasduasdu

console.log(reg.test("Nome: Matheus"));
console.log(reg.test("Nome: José"));
console.log(reg.test("Nome: Maria"));
