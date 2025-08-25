class Conta{
    constructor(contaCorrente,contaPoupanca,juros){
        this.contaCorrente = contaCorrente;
        this.contaPoupanca = contaPoupanca;
        this.juros = juros;
    }

    deposito(valor){
        this.contaCorrente += valor;
    }

    saque(valor){
        this.contaCorrente -= valor;
    }

    transferir(valor){
        this.contaPoupanca += valor;
        this.contaCorrente -= valor;
    }

    jurosDeAniversario(){
        let juros = (this.contaPoupanca * this.juros) / 100;
        this.contaPoupanca += juros;
    }
}

class ContaEspecial extends Conta{
    constructor(contaCorrente,contaPoupanca,juros){
        super(contaCorrente,contaPoupanca,juros*2)
    }
}



let conta = new Conta(1000,5000,1);
console.log(conta);

conta.saque(500);
console.log(conta);

conta.deposito(5000);
console.log(conta);

transferir(1000);
console.log(conta);

conta.jurosDeAniversario();
console.log(conta);

let Conta2 = new ContaEspecial(1000,5000,1);
console.log(Conta2);

Conta2.saque(5000);
console.log(Conta2);

Conta2.jurosDeAniversario();
console.log(Conta2);