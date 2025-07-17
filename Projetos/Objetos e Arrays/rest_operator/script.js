// uma forma de uma função receber varios parametros

let num = 1;
let num2 = 5;
let num3 = 3;
let num4 = 10;

function imprimirNumeros(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}

imprimirNumeros(num,num2,num3);

console.log("Pausa");

imprimirNumeros(num4);

console.log("Pausa");

imprimirNumeros(2,4,5,6,7,8,9);