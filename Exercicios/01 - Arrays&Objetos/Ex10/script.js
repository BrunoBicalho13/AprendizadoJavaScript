const calculadora = {
    soma: function(a,b){
        return a + b;
    },

    subtrair: function(a,b){
        return a - b;
    },

    multiplicar: function(a,b){
        return a * b;
    },

    dividir: function(a,b){
        return a / b;
    }
};

console.log(calculadora.soma(2,3));
console.log(calculadora.subtrair(3,2));
console.log(calculadora.dividir(4,2));
console.log(calculadora.multiplicar(5,6));
