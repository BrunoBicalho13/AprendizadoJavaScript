for (let i = 5; i < 20; i = i + 1) {
    if (i % 10 == 0) {
        console.log("Saiu do loop");
        break;
    }
}

let nome = "Bruno";

for (let i = 0; i < 10; i = i + 1) {

    if (i == 3) {
        nome = "Lorenzo";
    }

    if (i == 5 && nome == "Lorenzo") {
        console.log("O nome é lorenzo, pode parar");
        break;
    }

    console.log(i);
}