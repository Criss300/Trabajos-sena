<?php
        let persona1;
        let persona2;
        let persona3;
        let anioNac1 = 1990;
        let anioNac2 = 2007;
        let anioNac3 = 2009;
        let anioAct  = 2024;
        let promedio;
        let edadPer1;
        let edadPer2;
        let edadPer3;

        edadPer1 = anioAct - anioNac1;

        edadPer2 = anioAct - anioNac2;

        edadPer3 = anioAct - anioNac3;

        promedio = (edadPer1 + edadPer2 + edadPer3)/3;

        if(promedio>=18){
            console.log("las personas son mayores de edad");

        }
        else if(edadPer1>=18){
            console.log("la persona 1 es mayor de edad");
        }
        else{
            console.log("la persona 1 es menor de edad");
        }
        if(edadPer3>=18){
            console.log("la persona 3 es mayor de edad");
        }
        else{
            console.log("la persona 3 es menor de edad");
    }
?>