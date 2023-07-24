console.log("---------")
console.log("|PUNTO C|")
console.log("---------")

console.log("\ncantidadDeGatos = 10")
console.log("cantidadDePasos = 4")
var cantidadDeGatos = 10;
var cantidadDePasos = 4;

for (let index = 1; index <= cantidadDeGatos; index++) {
    if (index % 2 == 0) {
        console.log("Gato #" + index + ": 🐈⬛" + "🐾".repeat(cantidadDePasos))
    } else {
        console.log("Gato #" + index + ": 🐈" + "🐾".repeat(cantidadDePasos))
    }
}