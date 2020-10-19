function obtenerNodeName() {
    var parent = document.getElementById("nombre-nodo");
    var etiqueta = parent.firstChild;
    /* Obteniendo el nombre de la etiqueta */
    alert("El tipo de elemento es: " + etiqueta.nodeName);
    /* Obteniendo el contenido de la etiqueta */
    var etiqueta2 = parent.firstElementChild.innerHTML;
    alert("El contenido del elemento es: " + etiqueta2);

    /* Verificando el nombre del nodo o tagName */
    var elemento = document.getElementById("nombre-nodo");

   if(elemento.nodeName == "DIV") { 
        alert("Este elemento es un div");
    }
    else{
        alert("Este elemento no es un div");
    }
}
