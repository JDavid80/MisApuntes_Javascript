/* Convertir Temporalmente de forma implicita*/
var Num1 = "12";
var Num2 = 4;
/* La operación suma funciona como una
concatenación, no como una op. aritmética */
console.log("Resultado Suma: " + (Num2 + Num1)); //Concatenación
console.log("Resultado Resta: " + (Num2 - Num1));
console.log("Resultado Multiplicaciòn: " + (Num2 * Num1));
console.log("Resultado División: " + (Num2 / Num1));
/* Conversión Explicita con ParseInt*/
var Num3 = "20";
var Num4 = 2;
console.log(parseInt(Num3) + Num4);
/* Conversión Explicita para decimales */
var Num5 = "12.2";
var Num6 = 4.5;
console.log(parseFloat(Num5) + Num6);
/* Conversor Explicito Number */
var Num7 = "8.2";
var Num8 = 3;
console.log("Resultado Suma: " + (Number(Num7) + Num8));
Num7 = "8";
Num8 = "3";
console.log("Resultado Suma: " + (Number(Num7) + Number(Num8)));
/* Conversión a string */
var num9 = 12;
var num10 = 12;
console.log("Resultado Concat: " + (num9.toString() + num10.toString()));