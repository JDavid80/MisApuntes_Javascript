
var ciudad1 = "PiTaLiTo";
/* Pasando todo a mayusculas */
ciudad1 = ciudad1.toUpperCase();
console.log(ciudad1);
/* Pasando todo a minúsculas */
ciudad1 = ciudad1.toLowerCase();
console.log(ciudad1);
/* Primera letra en mayuscula */
ciudad1 = ciudad1[0].toUpperCase() + ciudad1.slice(1);
console.log(ciudad1);
/* Extrayendo parte de la cadena */
var areaConocimiento = "Programación";
areaConocimiento = areaConocimiento.slice(0,7);
console.log(areaConocimiento);
/* Contando caracteres */
var tematica = "Programación Orientada a Objetos";
console.log("Longitud: " + tematica.length);
/* Buscando Espacios dobles */
var nombres = "Jesus  David";
for (i = 0; i < nombres.length; i++){
    if (nombres.slice(i, (i + 2)) === "  ") {
        console.log("La cadena tiene espacios dobles");
        break;
    }
}
/* Reemplazando parte de la cadena de texto */
var hobby = "Programar en Java";
var newLang = "Python";
for (i = 0; i < hobby.length; i++) {
    if (hobby.slice(i, i + 4) === "Java") {
        hobby = hobby.slice(0, i);
    }
}
console.log(hobby + newLang);
/* método indexof para reemplazar
parte de una cadena de texto.*/
var hobby2 = "Programar en Javascript a tope";
var firstChar = hobby2.indexOf("Javascript")
if (firstChar !== -1) {
    console.log(firstChar);
    hobby2 = hobby2.slice(0, firstChar) + "php" + hobby2.slice(firstChar + 10);
    console.log(hobby2);
}
/* Extrayendo el primer caracter */
var primerNombre = "Jesus";
var primerCaracter = primerNombre.charAt(0);
console.log(primerCaracter);
/* Extrayendo el último caracter */
var primerNombre = "Jesus";
var primerCaracter = primerNombre.charAt(primerNombre.length - 1);
console.log(primerCaracter);
/* Buscando Carácteres Especiales */
var frase = "Hola Mundo!"
for (var i = 0; i < frase.length; i++) {
    if (frase.charAt(i) === "!") {
        console.log("La cadena tiene signos de admiración.");
    }
}
/* Reemplazar texto con el método replace */
var ciudad = "Valle de Pitalito";
ciudad = ciudad.replace("Pitalito", "Laboyos");
console.log(ciudad);