function obtenerPadre() {
    var divContent = document.getElementById("content-1");
    var padreDiv = divContent.parentNode.nodeName;
    alert(padreDiv);
}
