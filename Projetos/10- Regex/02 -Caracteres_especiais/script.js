/* 
\d = qualquer caractere
\w = um caractere alfanumerico
\s = Qualquer caractere de espaço em bbranco
\D = Qualquer caractere que não são digitos
\W = Caractere não alfanumerico
\S = caractere que não seja expaço em branco 
. - Qualquer caractere menos quebra de linha
*/

const pontoRegex = /./; 
console.log(pontoRegex.teste("asd"));
console.log(pontoRegex.teste("123"));
console.log(pontoRegex.teste("123asd"));

const dRegex = /\d/;
console.log(pontoRegex.teste("asd"));
console.log(pontoRegex.teste(" "));//false
console.log(pontoRegex.teste("123"));
console.log(pontoRegex.teste("123asd"));

const dRegex2 = /\D/;
console.log(pontoRegex.teste("asd"));
console.log(pontoRegex.teste(" "));
console.log(pontoRegex.teste("123"));//false
console.log(pontoRegex.teste("123asd"));

const sRegex = /\s/;
console.log(pontoRegex.teste("asd"));
console.log(pontoRegex.teste(" ")); //true
console.log(pontoRegex.teste("123"));
console.log(pontoRegex.teste("123asd"));

const wRegex = /\w/;
console.log(pontoRegex.teste("asd"));
console.log(pontoRegex.teste(" ")); //false
console.log(pontoRegex.teste("123"));
console.log(pontoRegex.teste("123asd"));

