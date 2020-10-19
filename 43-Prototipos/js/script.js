/* Creando un prototipo por medio de un constructor */
function Aprendiz(nom, ape, dir) {
    this.nombres = nom;
    this.apellidos = ape;
    this.direccion = dir;

    this.nombreCompleto = function() {
        return this.nombres + " " + this.apellidos; 
    }
}

var Aprendiz1 = new Persona("Pedro", "Perez", "Pitalito");
var Aprendiz2 = new Persona("Maria", "Rojas", "Timaná");

/* Añadiendo una propiedad a un objeto */
Aprendiz1.Tecnico = "Sistemas";

/* Añadir un método a un objeto*/
Aprendiz1.Residencia = function() {
    return "Lugar de Residencia: " + this.dir;
}
/* Añadiendo una propiedad a un prototipo */
Aprendiz.prototype.Ficha = "1802853";

/* Añadir un método a un prototipo */
Aprendiz.prototype.curso = function() {
    return "El aprendiz pertenece a la ficha: " + this.Ficha;
}