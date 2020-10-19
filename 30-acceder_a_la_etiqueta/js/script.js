/* Declaro una variable global que accede
a todos los párrafos */
var parr = document.getElementsByTagName("p");

/* De igual forma puedo acceder a todas las imagenes, divs, listas, etc.*/
var pics = document.getElementsByTagName("img");

var divs = document.getElementsByTagName("divs");

var ulist = document.getElementsByTagName("ul");

function cambiarParrafo() {
    parr[1].innerHTML = "Este texto es modificado desde javascript"
    parr[1].style.color = "red";
}

function cambiarFuente() {
    for (var i = 0; i <= 3; i++) {
        parr[i].style.fontFamily = "Verdana, Geneva, sans-serif";
    }
}

/* Recorriendo todos los elementos del content 1*/
function CargarEstilosContent1() {
    var selectDiv1 = document.getElementById("content-1");
    var fontSpecial1 = selectDiv1.getElementsByTagName("p");
    for (var i = 0; i < fontSpecial1.length; i++) {
        fontSpecial1[i].style.color = "red";
    }
}
/* Aplicando cambios a un elemento del content-2 */
function CargarEstilosContent2() {
    var selectDiv2 = document.getElementById("content-2");
    var fontSpecial2 = selectDiv2.getElementsByTagName("p");
    fontSpecial2[1].style.color = "blue";
}

 