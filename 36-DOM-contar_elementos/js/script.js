window.onload = function() {
    var elementosLi = document.getElementsByTagName("li");
    for(var i = 0; i < elementosLi.length; i++) {
        if (elementosLi[i].innerHTML === "")  {
            elementosLi[i].innerHTML = "texto generado desde Javascript";
            elementosLi[i].style.color = "red";
        }
    }

    var nodoPadre = document.getElementById("elementos");
    var listaNodos = nodoPadre.childNodes;
    var numNodos = listaNodos.length;

    var numNodosLi = 0;

    for (var i = 0; i < numNodos; i++) {
        if (listaNodos[i].nodeName.toLowerCase() == "li") {
            numNodosLi++;
        }
    }
    alert("El total de elementos Li es: " + numNodosLi);
}