let arreglo = [];
let pares = [];
let impares = [];
let iterar;

for(iterar = 1; iterar <= 10; iterar++){
    arreglo.push(iterar)

    if(iterar %2 == 0){
        pares.push(iterar)
    }
    else{
        impares.push(iterar)
    }
}

console.log("Numeros: " + arreglo)
console.log("Numeros pares: " + pares)
