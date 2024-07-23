<?php
        let cuad1;
        let cuad2;
        let cuad3;
        let ladCuad1 = 10;
        let ladCuad2 = 20;
        let ladCuad3 = 30;

        cuad1 = ladCuad1 * ladCuad1;

        cuad2 = ladCuad2 * ladCuad2;

        cuad3 = ladCuad3 * ladCuad3;

        if(cuad1 == cuad2 && cuad1 == cuad3 && cuad2 == cuad3){
            console.log("todos los cuadrados son iguales");

        }
        else if(cuad1 > cuad2 && cuad1 > cuad3 ){
            console.log(cuad2 + "es mayor");
        }
        else{
            console.log(cuad3 + "es mayor");
        }

?>