<?php
        let n1 = 3;
        let n2 = 2;
        let n3 = 5;
        let suma;
        let porce1;
        let porce2;
        let porce3;

        porce1 = n1 * 0.2;

        porce2 = n2 * 0.35;

        porce3 = n3 * 0.45;

        suma = porce1 + porce2 + porce3;

        if(suma > 4.5){
            console.log("su nota es superior");

        }
        else if( suma <= 4.5 && suma >3.5){
            console.log("su nota es buena");
        }
        if(suma <= 3.5 && suma >= 3){
            console.log("la nota es media");
        }
        else{
            console.log("su nota es mala");
        }
?>