function multiplicarTresNumeros(x,y,z){
    return x * y * z;
}

console.log(multiplicarTresNumeros(2,3,4));

const mult = multiplicarTresNumeros(5,6,7);

console.log(mult);

function podeDirigir(idade,cnh){

    if (idade >= 18 && cnh == true){
        console.log("pode");
    } else {
        console.log("Não pode");
    }

    console.log(podeDirigir(19,true));
    console.log(podeDirigir(12,false));
    console.log(podeDirigir(19,false));
    console.log(podeDirigir(19,1));
    
}