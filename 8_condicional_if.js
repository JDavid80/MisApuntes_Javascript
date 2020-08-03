/* if - else con operador de igualdad estricta*/
var pass = "1234";
console.log("if-else con operador de igualdad estricta:");
if (pass === 1234)
{
    console.log("Acceso autorizado");
}
else
{
    console.log("Acceso Denegado!");
}

/* if-else */
pass = "1234";
console.log("if-else con operador de igualdad: ");
if (pass == 1234)
{
    console.log("Acceso autorizado");
}
else
{
    console.log("Acceso Denegado!");
}

/* if - else if */
console.log("Ejercicio if-else if: ");
var resultadoPrueba = 6;
if (resultadoPrueba === 10)
{
    console.log("Resultado: Excelente");
}
else if (resultadoPrueba >= 7 && resultadoPrueba <= 9)
{
    console.log("Resultado: Bueno");
}
else if (resultadoPrueba >= 5 && resultadoPrueba <= 6)
{
    console.log("Resultado: Regular");
}
else if (resultadoPrueba >= 1 && resultadoPrueba <=4)
{
    console.log("Resultado: Malo");
}
else {
    console.log("Ha surgido un error.");
}