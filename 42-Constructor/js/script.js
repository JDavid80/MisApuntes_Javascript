/* Por convención, usemos la primera letra de la función en mayuscula */
function Aprendiz(nombres, apellidos, telefono, direccion) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.telefono = telefono;
    this.direccion = direccion;
}

/* Llamada para crear un objeto */
var aprendiz1 = new Aprendiz("Pedro", "Perez", "5533264", "Venecia");
var aprendiz2 = new Aprendiz("Maria", "Rojas", "987654321", "Centro");
alert(aprendiz1.nombres + " " + aprendiz1.apellidos);