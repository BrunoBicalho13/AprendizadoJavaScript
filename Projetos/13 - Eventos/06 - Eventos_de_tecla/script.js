window.addEventListener("keydown", function(e){

    if(e.key == 'q'){
        console.log("Apertou a tecla q");
    }else if(e.key == "Enter"){
        console.log("Apertou o Enter");
    }
});

window.addEventListener("keyup", function(e) {

    if(e.key == "Enter"){
        console.log("soltou o enter");
    }
});