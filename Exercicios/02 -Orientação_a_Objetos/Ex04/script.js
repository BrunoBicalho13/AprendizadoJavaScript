class Carro {
    constructor(marca,cor,gasolinaRestante){
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = this.consumo;
    }

    dirigir(km){
        let litrosConsumidos = km / this.consumo;

        this.gasolinaRestante -= litrosConsumidos;
    }

    abastecer(litros){
        this.gasolinaRestante += litros;
    }
}

let carro = new Carro("VW","Preto",100,14);

console.log(carro);

carro.dirigir(100);

console.log(carro);

carro.abastecer(10);

console.log(carro);