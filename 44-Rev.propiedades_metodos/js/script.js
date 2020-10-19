/* Creando un objeto con propiedades */
var plan1 = {
    name: "basic",
    price: 25000,
    space: 100,
    transfer: 1000,
    state: true,
    discountMonths: [6,7,11] //Meses de descuento
};
/* Método */
function PlanAnual() {
    /* 20% de descuento */""
    var PlanAnyo = (plan1.price * 12) * .80;
    var parentDiv = document.getElementById("content-main");
    var newParagraph = document.createElement("p");
    var texto = document.createTextNode("El costo por año es: $" + PlanAnyo);
    newParagraph.appendChild(texto);
    parentDiv.appendChild(newParagraph);
}

/* Verificando si el objeto cuenta con una propiedad determinada */
function VerificarPropiedad() {
    var parentDiv = document.getElementById("content-main");
    var newParagraph = document.createElement("p");
    var ExistProperty = "space" in plan1;
    if (ExistProperty == true) {
        var texto = document.createTextNode("La propiedad space si existe");
    }
    else {
        var texto = document.createTextNode("La propiedad space NO existe");
    }
    newParagraph.appendChild(texto);
    parentDiv.appendChild(newParagraph);
}
/* Verificando si el objeto llama a algún método determinado */
function ValidarMetodo() {
    var parentDiv = document.getElementById("content-main");
    var newParagraph = document.createElement("p");
    /* En este caso, ExistMethod será false porque el método PlanAnual 
    NO es llamado dentro de la creación de las propiedades del objeto */
    var ExistMethod = "PlanAnual()" in plan1;
    if (ExistMethod == true) {
        var texto = document.createTextNode("El método PlanAnual si existe");
    }
    else {
        var texto = document.createTextNode("El método PlanAnual NO existe " +
        "o no se encuentra dentro del objeto");
    }
    newParagraph.appendChild(texto);
    parentDiv.appendChild(newParagraph);
}
function VerPropiedades() {
    var listaPropiedades = [];
    for (var prop in plan1) {
        listaPropiedades.push(" " + prop);
    }
    var parentDiv = document.getElementById("content-main");
    var newParagraph = document.createElement("p");
    var texto = document.createTextNode(listaPropiedades);
    newParagraph.appendChild(texto);
    parentDiv.appendChild(newParagraph); 
}  

