var cantidadDeGatos = 10;
var cantidadDePasos = 4;

console.log("---------")
console.log("|PUNTO C|")
console.log("---------")

for (let index = 1; index <= cantidadDeGatos; index++) {
    if (index%2==0) {
        console.log("Gato #" + index + ": 🐈⬛" + "🐾".repeat(cantidadDePasos))
    }else{
    console.log("Gato #" + index + ": 🐈" + "🐾".repeat(cantidadDePasos))}
}