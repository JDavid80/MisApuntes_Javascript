
function AddNodos() {
    /* Creamos el párrafo */
    var nodeToAdd = document.createElement("p");
    /* Establecemos atributos */
    nodeToAdd.setAttribute("class", "color-darkcyan");
    /* Creamos un texto */
    var newText = document.createTextNode("Hello!");
    /* Agregamos el texto creado al párrafo */
    nodeToAdd.appendChild(newText);
}
function InsertNodos() {
    var parentDiv = document.getElementById("div1");
    /* Creamos el párrafo */
    var newParagraph = document.createElement("p");
    var t = document.createTextNode("Hola Mundo");
    /* Agregamos el texto al párrafo */
    newParagraph.appendChild(t);
    /* Agregamos el párrafo al div que se 
    encuentra creado con anterioridad */
    parentDiv.appendChild(newParagraph);

    var boton = document.createElement("button");
    boton.setAttribute("class", "style-button");
    var textBoton = document.createTextNode("Eliminar");
    boton.appendChild(textBoton);
    parentDiv.appendChild(boton);
}
   

