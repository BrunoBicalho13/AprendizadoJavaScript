class Endereco {
    constructor(rua,bairro,cidade,estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua){
        this.rua = novaRua;
    }

    set novoBairro(novoBairro){
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade){
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado){
        this.estado = novoEstado;
    }
}

let endereco = new Endereco("Rua Zinia", "Bairro Havai", "Belo Horizonte", "MG");

console.log(endereco);

endereco.novaRua = "Avenida Ressaca";
endereco.novoBairro = "Coração Eucaristico";

console.log(endereco);
