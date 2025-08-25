class Kart {
    constructor(itens,qtd,valor){
        this.itens = itens;
        this.qtd = qtd;
        this.valor = valor;
    }

    addItem(item){
        let contador = 0;
        
        for(let itemKart in this.itens){
            if(this.itens[itemKart].id == item.id){
                this.itens[itemKart].qtd += item.qtd;
                contador = 1;
            }
        }

        if(contador == 0){
            this.itens.push(item);
        }

        this.qtd += item.qtd;
        this.valor += item.preco * item.qtd;
    }

    removeItem(item){
        for(let itemKart in this.itens){
            if(this.itens[itemKart].id == item.id){
                
                let obj = this.itens[itemKart];
                let index = this.itens.findIndex(function(obj){ return obj.id == item.id});
                
                this.qtd -= this.itens[itemKart].qtd;
                this.valor -= this.itens[itemKart].preco * this.itens[itemKart].qtd;
                
                this.itens.splice(index,1);

            }

    }
}

}

let kart = new Kart([
    {
        id: 1,
        nome: "Camisa",
        qtd: 1,
        preco: 20
    },
    {
        id: 2,
        nome: "Calça",
        qtd: 2,
        preco: 50
    }
], 3, 120);

console.log(kart);

kart.addItem({id: 1, nome:"Camisa",qtd:2,preco:20});

console.log(kart);

kart.addItem({id: 3, nome:"Bone",qtd:1,preco:15});

kart.removeItem({id:1,nome:"Camisa", qtd: 2, preco:20});

console.log(kart);