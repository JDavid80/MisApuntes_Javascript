/* Función sin parametros y sin retorno */
function llamarHora() {
    var now = new Date();
    var hora = now.getHours();
    var minutos = now.getMinutes();
    if (hora < 10) {
        hora = "0" + hora;
    }
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    alert("Hora Actual: " + hora + ":" + minutos);
}
/* Función con parámetros y sin retorno */
function saludo(bienvenida) {
    alert(bienvenida);
}
/* Función con varios parametros */
function presentacion(nombre, edad) {
    alert("Nombre: " + nombre + ". Edad: " + edad)
}
/* Función con retorno */
function validarDescuento(compra) {
    var total = 0;
    if (compra >= 10000) {
        //si la compra es mayor a 10000 
        //tiene un 10% de descuento
        total = compra * .9;
    }
    else if (compra > 5000 && compra < 9999) {
        //descuento del 5%
        total = compra * .95;
    }
    else {
        total = compra;
    }
    return total;
}
//Creamos la función desde la cual
//vamos a llamar a la función con retorno
function calcDescuento(costo) {
    alert("Costo total: " + validarDescuento(costo));
}