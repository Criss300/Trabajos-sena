let tabla9 = []
let pares = []
let impares = []
let equis = []
let mult = 1
let paresSuma 
let imparesSuma 

for(let fila = 0; fila < 5; fila++){
    tabla9[fila] = []
    for(let colum = 0; colum < 5; colum++){
        tabla9[fila][colum] = mult * 9
        mult ++
        
        if(tabla9[fila][colum] %2 == 0){
            pares.push(tabla9[fila][colum])
        }
        else{
            impares.push(tabla9[fila][colum])
        }
        if(fila===colum || fila+colum===4){
            equis += tabla9[fila][colum] + "\t"
        }
        else{
            equis += "\t"
        }
        paresSuma = 0;
        for(let iterar = 0; iterar < pares.length; iterar++){
            paresSuma += pares[iterar]
        
        imparesSuma = 0

        for(let iterar2 = 0; iterar2 < impares.length; iterar2++){
            imparesSuma += impares[iterar2]
        }
    }
}
equis += "\n"
}

console.log("Tabla del 9: ", tabla9)
console.log("Pares de la tabla del 9: "+ pares)
console.log("impares de la tabla del 9: "+ impares)
console.log("Suma de los pares : "+ paresSuma)
console.log("suma de los impares: "+ imparesSuma)
console.log("Equis de la tabla " +"\n"+ equis)
