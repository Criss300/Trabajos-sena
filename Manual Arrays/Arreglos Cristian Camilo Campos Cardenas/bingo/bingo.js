let tabla2 = []
let letraB = []
let letraI = []
let letraN = []
let letraG = []
let letraO = []
let num = 1

for(let fil = 0; fil < 5; fil++){
    tabla2[fil] = []

    for(let colum = 0; colum < 5; colum++){
    tabla2[fil][colum] = num * 2

    if(colum === 0) letraB.push(tabla2[fil][colum])
        else if (colum === 1) letraI.push(tabla2[fil][colum])
        else if (colum === 2) letraN.push(tabla2[fil][colum])
        else if (colum === 3) letraG.push(tabla2[fil][colum])
        else if (colum === 4) letraO.push(tabla2[fil][colum])
        num ++
    }
}
console.log("Tabla del 2 ", tabla2)
console.log("B= " + letraB)
console.log("I= " + letraI)
console.log("O= " + letraN)
console.log("N= " + letraG)
console.log("O= " + letraO)
