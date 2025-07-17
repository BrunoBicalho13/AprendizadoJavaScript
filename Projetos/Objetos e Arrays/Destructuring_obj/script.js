//Definir variaveis com propriedades do objeto com uma notação diferente

let obj = {
    rodas: 4,
    portas: 4,
    tetosolar: true,
    motor: '2.0'
};

const{'rodas': vRodas, portas: vPortas, tetosolar: vTetoSolas, motor: vMotor} = obj;

console.log(vRodas);
console.log(vPortas);