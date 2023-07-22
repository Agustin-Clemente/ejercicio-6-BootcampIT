var cantidadDeGatos = 10;

/* for (let index = 1; index <= cantidadDeGatos; index=index+3) {
    console.log("Gato #" + index + ": 😺")
}

for (let index = 2; index <= cantidadDeGatos; index=index+3) {
    console.log("Gato #" + index + ": 😸")
}

for (let index = 3; index <= cantidadDeGatos; index=index+3) {
    console.log("Gato #" + index + ": 😹")
} */

/* for (let index = 1; index <= cantidadDeGatos; index++) {
    if (index%3==0) {
        console.log("Gato #" + index + ": 😹")
    }else if (index%2==0) {
        console.log("Gato #" + index + ": 😸")
    }else{
    console.log("Gato #" + index + ": 😺")}
} */

/* var contador= 1
for (let index = 1; index < cantidadDeGatos; index= index +3) {
    
    
    console.log(contador +": 😺")
    console.log(contador +1 +": 😸")
    console.log(contador +2 +": 😹")
    contador= contador+3
} */

/* var cont= 1
for (let index = 1; index < cantidadDeGatos; index ++) {
    
    
    console.log(cont +": 😺")
    cont++
    console.log(cont +": 😸")
    cont++
    console.log(cont +": 😹")
    cont++
} */

for (let index = 1; index <= cantidadDeGatos; index++) {
    if (index % 3 == 0) {
        console.log("Gato #" + index + ": 😹")
        } else if (index == 1 || index % 3 == 1) {
        console.log("Gato #" + index + ": 😺")  
    }else{
    console.log("Gato #" + index + ": 😸")}
}

