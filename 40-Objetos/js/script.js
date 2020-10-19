/* Creando un objeto con propiedades */
var plan1 = {
    name: "basic",
    price: 15,
    space: 100,
    transfer: 1000,
    state: true,
    discountMonths: [6,7,11] //Meses de descuento
};
/* Actualización de precio */
plan1.price = 18;

/* Creando un objeto sin propiedades */
var plan2 = {};

/* Creando  propiedades sin definir */
plan2.name = undefined;
plan2.price = undefined;

/* Eliminando propiedades */
delete plan2.price;

function ValidarPropiedad() {
    var PropertyExists = "name" in plan2;
    if (PropertyExists == true) {
        alert("La propiedad name de plan2 SI existe");
    }
    else {
        alert("La propiedad name de plan2 NO existe");
    }
}