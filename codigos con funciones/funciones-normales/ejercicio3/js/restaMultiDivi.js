

let numeroUno
let numeroDos


const resta=function(pnumeroUno,pnumeroDos){
    let restar;
    numeroUno = pnumeroUno;
    numeroDos = pnumeroDos;

    restar = pnumeroUno - pnumeroDos;
    return restar;
}
const multiplicacion=function(pnumeroUno,pnumeroDos){
    let multiplicar;
    numeroUno = pnumeroUno;
    numeroDos = pnumeroDos;

    multiplicar = pnumeroUno * pnumeroDos;
    return multiplicar;
}
const division=function(pnumeroUno,pnumeroDos){
    let dividor;
    numeroUno = pnumeroUno;
    numeroDos = pnumeroDos;

    dividor = pnumeroUno / pnumeroDos;
    return dividor;
}
const operacion = function(poperador,pnumeroUno,pnumeroDos){
    let operador = poperador;
    numeroUno = pnumeroUno;
    numeroDos = pnumeroDos;
     if (operador == "resta") {
        operacionResultado = resta(pnumeroUno,pnumeroDos);
     }else if (operador == "multiplicacion") {
        operacionResultado = multiplicacion(pnumeroUno,pnumeroDos);
     }else if (operador == "division") {
        operacionResultado = division(pnumeroUno,pnumeroDos);
     }else{
        operacionResultado = "Error!!! no se puede operar";
     }
     return operacionResultado;
}