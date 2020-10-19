window.onload = function() {
    var contenedor = document.getElementById("mexico");
    var validarId = contenedor.hasAttribute("width");
    alert(validarId);
}
function obtenerNombreAtributo() {
    var atribImg = document.getElementById("mexico");
    var anchoImg = atribImg.getAttribute("width");
    alert("El atributo width tiene un valor de: " + anchoImg);
}
function EstablecerAtributo() {
    var enlace = document.getElementById("enlace-campus");
    enlace.setAttribute("href", "https://campusmvp.es");
}
function listarAtributos() {
    var list = document.getElementById("pSpecial").attributes
    var numAtributos = list.length;
    alert("Numero de Atributos: " + numAtributos);
    for (var i = 0; i < numAtributos; i++) {
        alert("atributo N. " + (i + 1) + ": " + list[i].nodeName);
    }
}