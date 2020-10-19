"use strict"

var costo = 32000;
var impuesto = 3500;
console.log("SubTotal: $" + (costo + impuesto));
console.log("El costo del domicilio es de $2.000");
console.log("Con Domicilio: $" + (costo + impuesto + 2000));
/* Hallando el límite con la constante Number.MAX_SAFE_INTEGER */
console.log(Number.MAX_SAFE_INTEGER);
/* Hallando el límite con una operación de potenciación */
console.log(Math.pow(2,53) - 1);
/* Hallando el límite con la conversión de binario a decimal */
let binario = "1111111111111111111111111111111111111111111111111111";
let binarioEnDecimal = parseInt(binario, 2);
console.log(binarioEnDecimal);
console.log(Number.MIN_SAFE_INTEGER);
