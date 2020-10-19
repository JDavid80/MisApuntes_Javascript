console.log(this);

var obj = {
    nombres: "David",
    Apellidos: "Calderón",
    NomCompleto: function() {
        return this.nombres + " " + this.Apellidos;
    }
}

alert(obj.NomCompleto());