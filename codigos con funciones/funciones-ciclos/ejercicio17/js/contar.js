function conta(contando) {
    let contar=contando;
    let numero=4;
    while (contar<=numero) {
        contar++
        if (contar%2==0) {
            console.log(contar+" Es par");
        } else {
            console.log(contar+" Es impar");
        }
    }
    return "Fin"
}

const contaExp = function(contando) {
    let contar=contando;
    let numero=4;
    while (contar<=numero) {
        contar++
        if (contar%2==0) {
            console.log(contar+" Es par");
        } else {
            console.log(contar+" Es impar");
        }
    }
    return "Fin"
}




/*function par(pnumero) {
    let numeros = contar(pnumero)


    if(numeros%2==0){
        resultado = numero + " Es par"
    }
    else{
        resultado = numero + " Es impar"
    }

    return resultado
}*/

//*FOR*/
function conta(contando){ 
    let contar=contando;
    let numero=5;
    for (contar=1; contar<=numero; contar++) {
        if (contar%2==0) {
            console.log(contar+" Es par");
        } else {
            console.log(contar+" Es impar");
        }
    }
    return "Fin"
}

const contaExp2 = function(contando){//expresion
    let contar=contando;
    let numero=5;
    for (contar=1; contar<=numero; contar++) {
        if (contar%2==0) {
            console.log(contar+" Es par");
        } else {
            console.log(contar+" Es impar");
        }
    }
    return "Fin"
}



