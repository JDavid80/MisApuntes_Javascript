function obtenerUrl() {
    var urlActual = window.location.href;
    alert(urlActual);
}
function obtenerRuta() {
    var rutaActual = window.location.pathname;
    alert(rutaActual);
}
function establecerRuta() { 
    window.location.href = "https://ed.team/"
}
function establecerRutaySeccion() {
   window.location.href = "https://www.campusmvp.es/#por-que-aprender-con-nosotros"
}
var btnAssign = document.getElementById("btnAssign");
btnAssign.addEventListener("click", function() {
    window.location.assign("https://ed.team/");
});

var btnReplace = document.getElementById("btnReplace");
btnReplace.addEventListener("click", function() {
    window.location.replace("https://www.campusmvp.es");
})