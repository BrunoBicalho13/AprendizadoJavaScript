// negação

const notAB = /[^ab]/;

console.log(notAB.test("a"));
console.log(notAB.test("Aqui tem a"));

const notAtoZ = /[^a-z]/;
console.log(notAtoZ.test("123 as"));
console.log(notAtoZ.test("asdasdsadsads4"));
console.log(notAtoZ.test("asdasdsadsads"));

const AtoZ = /[a-z]/;
console.log(notAtoZ.test("123 as"));
console.log(notAtoZ.test("asdasdsadsads4"));
console.log(notAtoZ.test("asdasdsadsads"));