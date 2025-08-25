const cachorro = {
    raca: 'SRD',
    uivar: function(){
        console.log("Auu");
    },
    rosnar: function(){
        console.log("Grrrrr");
    },

    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return this.raca;
    }
 };

 cachorro.setRaca('pastor Alemão');
 console.log(cachorro.getRaca());