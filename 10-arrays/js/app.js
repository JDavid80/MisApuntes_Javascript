var aprendices = ["Pedro", "Luis", "Jorge", "Maria"];
console.log("El primer estudiante es: " + aprendices[0]);
/* Elementos de diferente tipo: */
var aprendiz1 = ["Luis", 25, true, 1.75];
console.log("La estatura de " + aprendiz1[0] + 
            " es de " + aprendiz1[3] + " metros.");
/* Agregando elementos a un array */
aprendiz1[4] = "Masculino";
/* Sobrescribiendo un elemento de un array */
aprendiz1[5] = "Pitalito"; 
aprendiz1[5] = "Timaná";
console.log("Residencia: " + aprendiz1[5])
/* Longitud de un array */
console.log("El arreglo aprendiz1 tiene\n" +
            "una longitud de " + 
            aprendiz1.length + " elementos");
/* Eliminando el último elemento (pop) */
aprendiz1.pop();
console.log("Residencia: " + aprendiz1[5]);        
/* Agregando varios elementos al final(push) */
aprendiz1.push("Pitalito", 2, "12265812");
console.log("C.C.: " + aprendiz1[7]);
/* Eliminando el primer elemento */
console.log("Nombre: " + aprendiz1[0]);
aprendiz1.shift();
console.log("Nombre: " + aprendiz1[0]);
/* Agregando elementos al inicio */
aprendiz1.unshift("Luis");
console.log("Nombre: " + aprendiz1[0] +
            ". Edad: " + aprendiz1[1]);
aprendiz1.shift();
aprendiz1.unshift("Luis");
console.log("Nombre: " + aprendiz1[0]);
aprendiz1.unshift(5, "C.C.");
console.log("Nombre: " + aprendiz1[2]);
/* Reemplazar y mover o eliminar elementos */
aprendiz1.splice(2, 0, "Javier", "Sanchez");
console.log("Nombre: " + aprendiz1[4]);
aprendiz1.splice(4, 1, "315-555-22", "ADSI");
console.log("Titulado: " + aprendiz1[5]);
aprendiz1.splice(3,2);
console.log("Titulado: " + aprendiz1[3]);

