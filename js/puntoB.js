var cantidadDeGatos = 5;
var cantidadDePasos = 3;

console.log("---------")
console.log("|PUNTO B|")
console.log("---------")

for (let index = 1; index <= cantidadDeGatos; index++) {
    console.log("Gato #" + index + ": 🐈" + "🐾".repeat(cantidadDePasos))
}