for (var i = 0; i <= 10; i++)
{
    console.log(i);
}
/* Salir de un for - Buscando a Pedro*/
aprendices = ["Juan", "Pedro", "Jorge", "Maria"];
for (var i = 0; i <= 3; i++)
{
    console.log("Aprendiz " + (i+1) + ": " + aprendices[i]);
    if (aprendices[i] === "Pedro")
    {
        console.log("Fin del ciclo. Aprendiz encontrado.");
        break;
    }
}
/* Declarando una matriz y dandole valores */
/* Para declarar un arreglo de dos dimensiones,
primero creamos una serie de arrays unidimensionales
y cada uno de estos arreglos unidimensionales
va dentro de otro arreglo unidimensional*/
/* Arreglos Unidimensionales */
/* Un arreglo unidimensional se puede declarar de tres formas:/*
/* Forma 1 */
var integrante1 = new Array();
integrante1[0] = 1;
integrante1[1]  = "CC";
integrante1[2] = "12265812";
integrante1[3] = "Jesus";
/* Forma 2 */
var integrante2 = new Array(2, "CC", "1083883979", "Yuly");
/* Forma 3 */
var integrante3 = [3, "RC", "1084250067", "Diego"];
/*  Creando los array unidimensionales que
almacenaran cada uno un array completo */
var registroIntegrantes = new Array(3);
registroIntegrantes[0] = integrante1;
registroIntegrantes[1] = integrante2;
registroIntegrantes[2] = integrante3;
for (var i = 0; i < registroIntegrantes.length; i++) {
    for (var j = 0; j < registroIntegrantes[i].length; j++) {
        console.log(registroIntegrantes[i][j]);
    }
}
var producto1 = new Array();
var producto2 = new Array();
var producto3 = new Array();
var productos = new Array();
//////
/*------------------ NAVEGADOR---------------  */
//////
/* Para ejecutar el siguiente ejercicio 
necesitamos un archivo .html
ya que le solicitaremos al usuario
que ingrese informeación */
/* for(var i = 0; i < 3; i++) {
    alert("Ingrese el registro N. " + (i + 1));
   if (i === 0) {
        for(var j = 0; j < 4; j++) {
            producto1[j] = prompt("Producto N:  " + (i + 1) + "_"+ (j + 1) + ": ");
        }
        productos[i] = new Array(producto1);
    }
    if (i === 1) {
        for(var j = 0; j < 4; j++) {
            producto2[j] = prompt("Producto N:  " + (i + 1) + "_"+ (j + 1) + ": ");
        }
        productos[i] = new Array(producto2);
    }
    if (i === 2) {
        for(var j = 0; j < 4; j++) {
            producto3[j] = prompt("Producto N:  " + (i + 1) + "_"+ (j + 1) + ": ");
        }
        productos[i] = new Array(producto3);
    }
}
for(var i = 0; i < 3; i++) {
    alert("Registro N. " + (i + 1));
    for(var j = 0; j < 4; j++) {
       alert(productos[i][0][j]); */
       /* i corresponde al producto N. 0,1... */
       /* 0 corresponde al numero del arreglo dentro del arreglo, en 
       este caso es el primer y único arreglo que tiene cada arreglo */
       /* j equivale a cada uno de los elementos de cada producto que esta
       dentro del arreglo productos...1, 1234, arroz, 500 */
  /*   }
} */
