function areas(operador,pbase, paltura,plado ){
    let area
    if (operador=="rectangulo") {
        area = pbase*paltura
    }else if(operador=="triangulo"){
        area = (pbase*paltura)/2
    }
    else if(operador=="cuadrado"){
        area = plado*plado
    }else{
        area ="Error!!! no se puede operar"
    }
        return area 
}