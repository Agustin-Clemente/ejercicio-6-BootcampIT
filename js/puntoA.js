var cantidadDeGatos = 10;

for (let index = 1; index <= cantidadDeGatos; index++) {
    if (index % 3 == 0) {
        console.log("Gato #" + index + ": 😹")
        } else if (index == 1 || index % 3 == 1) {
        console.log("Gato #" + index + ": 😺")  
    }else{
    console.log("Gato #" + index + ": 😸")}
}

