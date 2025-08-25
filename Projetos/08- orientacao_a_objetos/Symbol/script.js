class Cachorro{
    constructor(raca,cor){
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log("Au au");
    }
}

Cachorro.prototype.raca = 'SRD';

let patas = Symbol();
Cachorro.protorype[patas] = 4;

let labrador = new Cachorro('Labrador','Amarelo');
console.log(labrador.patas);

labrador.latir();

console.log(Cachorro.prototype.raca);
console.log(labrador.raca);

// acessando symbol 

console.log(Cachorro.protorype[patas]);
console.log(labrador[patas]);