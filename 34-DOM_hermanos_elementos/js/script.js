function obtenerHermanos() {
    var hijosDiv = document.getElementById("hermanos");
    var elemento3 = hijosDiv.childNodes[5];
    var nextHermano = elemento3.nextElementSibling.innerHTML;
    alert("El elemento siguiente al 3 es: " + nextHermano);
    var previousHermano = elemento3.previousElementSibling.innerHTML;
    alert("El elemento anterior al 3 es: " + previousHermano);
}