function hacer_invisible() {
    document.getElementById("templo").className = "hidden";
} 
function intercambiar() {
    document.getElementById("kioto-pic1").src = "img/kioto2.jpg";
}
/* function interConArg(idPic, ruta) {
    var newPic = document.getElementById(idPic).src = ruta;
} */
/* En el siguiente ejemplo, partimos la línea 8 en dos líneas */
function interConArg(idPic, ruta) {
    var newPic = document.getElementById(idPic);
    newPic.src = ruta;
}
