let input1 = document.querySelector("input");
let input2 = document.querySelector("#input1");

input1.addEventListener("focus", function() {
    console.log("entrou no input");
});

input2.addEventListener("blur", function() {
    console.log("Saiu do input");

});
