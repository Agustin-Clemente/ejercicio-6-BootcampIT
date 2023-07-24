console.log("---------")
console.log("|PUNTO A|")
console.log("---------")

console.log("\ncantidadDeGatos = 10")
var cantidadDeGatos = 10;

for (let index = 1; index <= cantidadDeGatos; index++) {
    if (index % 3 == 0) {
        console.log("Gato #" + index + ": 😹")
    } else if (index == 1 || index % 3 == 1) {
        console.log("Gato #" + index + ": 😺")
    } else {
        console.log("Gato #" + index + ": 😸")
    }
}

console.log("\ncantidadDeGatos = 1")
cantidadDeGatos = 1

for (let index = 1; index <= cantidadDeGatos; index++) {
    if (index % 3 == 0) {
        console.log("Gato #" + index + ": 😹")
    } else if (index == 1 || index % 3 == 1) {
        console.log("Gato #" + index + ": 😺")
    } else {
        console.log("Gato #" + index + ": 😸")
    }
}

console.log("\ncantidadDeGatos = 4")
cantidadDeGatos = 4;

for (let index = 1; index <= cantidadDeGatos; index++) {
    if (index % 3 == 0) {
        console.log("Gato #" + index + ": 😹")
    } else if (index == 1 || index % 3 == 1) {
        console.log("Gato #" + index + ": 😺")
    } else {
        console.log("Gato #" + index + ": 😸")
    }
}