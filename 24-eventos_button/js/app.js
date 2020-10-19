function saludo(mensaje) {
    alert(mensaje);
}
function fechaActual() {
    var currentTime = new Date();
    var dia = currentTime.getDate();
    var mes = currentTime.getMonth() + 1;
    var anyo = currentTime.getFullYear();
    var fecha = "Fecha Actual: " + dia + "/" + mes + "/" + anyo;
    alert(fecha);
}