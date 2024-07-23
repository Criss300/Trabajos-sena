<?php
let salario;
        let diasTrabajados = 30;
        let valorDia = 30000;
        let salud;
        let pension;
        let arl;
        let deducibles;
        let reten;
        let subTrans;
        let totalPagar;

        salario    = diasTrabajados * valorDia;

        salud      = salario * 0.12;

        pension    = salario * 0.16;
        
        arl        = salario * 0.052;

        deducibles = pension + arl + salud;

        if(salario>4600000){
            reten = salario * 0.04;
        }
        else{
            reten = 0;
        }
        if(salario<2300000){
            subTrans = 162000;
        }
        else{
            subTrans = 0;
        }

        totalPagar = salario + subTrans - deducibles - reten;

        console.log(salud);

        console.log(pension);

        console.log(arl);

        console.log(reten);

        console.log(totalPagar);
    
    ?>