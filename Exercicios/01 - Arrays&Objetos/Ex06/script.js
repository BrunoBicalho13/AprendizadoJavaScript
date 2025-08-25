let nomes = ["Bruno","Cirilo","Caique","Rodrigo","Koiti"];

let numeros = [0,1,2,3];

function verificaElementosArray(arr){
    if(arr.lenght >= 5){
        console.log("Muitos elementos");
    }else {
        console.log("Poucos Elementos");
    }
}

verificaElementosArray(nomes);
verificaElementosArray(numeros);