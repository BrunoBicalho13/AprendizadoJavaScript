//Coleção de Propriedades que podem ser acessadas, parecidos com arrays

let cachorro = {
    patas: 4,
    nome: 'Shark',
    latir: function(){
        console.log('au au');
    }
};

console.log(cachorro.patas);
console.log(cachorro.nome);
cachorro.latir();