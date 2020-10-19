function leerInfo() {
    var info = document.getElementById("content-1");
    var infoChild = info.childNodes[7];
    var contents = infoChild.innerHTML;
    alert(contents);
}

function leerNodo() {
    var nodoCounter = 0;
    var nodos = document.getElementById("tiposNodo");
    for (var i = 0; i <= nodos.childNodes.length; i++) {
        if(nodos.childNodes[i].nodeType === 1) {
            nodoCounter++;
        }
        if (nodoCounter === 2) {
            nodos.childNodes[i].innerHTML = "Nodo reemplazado desde javascript";
            nodos.childNodes[i].style.color = "red";
            break;
        }
    }
    
}
function leerChild() {
    var hijosDiv = document.getElementById("content-3");
    var primHijo = hijosDiv.firstElementChild.innerHTML;
    alert("El primer nodo es: " + primHijo);
    var ultHijo = hijosDiv.lastElementChild.innerHTML;
    alert("El último nodo es: " + ultHijo);
}