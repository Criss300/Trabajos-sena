<?php
$valorDia;
$diasTrabajados;
$sueldo;
$salud;
$pension;
$descuento;
$pagoTotal;
$arl;

$sueldo = $diasTrabajados * $valorDia;

$salud = $sueldo * 0.12;

$pension = $sueldo * 0.16;

$arl = $sueldo * 0.052;

$descuento = $salud + $pension + $arl;

$pagoTotal = $sueldo - $descuento;

?>