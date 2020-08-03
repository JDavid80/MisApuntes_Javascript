/* AND */
var user_BD = "jdcal";
var pass_BD = 1234;
var user_input = "jdcal";
var pass_input = 1234;
if (user_BD === user_input && pass_BD === pass_input)
{
    console.log("Bienvenido!!");
}

/* OR */
var forma_pago = "T_Credito";
if (forma_pago === "T_Debito" || forma_pago === "T_Credito")
{
    console.log("Transacción aprobada!");
}

/* NOT */
var estado_usuario = false;
if (!estado_usuario)
{
    console.log("El usuario se encuentra inactivo");
}

/* XOR */
/* Estudiante beneficiario del sisben o de jovenes 
en acción. Si cuenta con los dos beneficios no puede  
acceder a un beneficio adicional. De igual forma si
no cuenta con ninguno de los dos tampoco puede acceder
al beneficio*/
benef_sisben = true;
benef_Jovenes_accion = true;
if (benef_sisben === true ^ benef_Jovenes_accion === true)
{
    console.log("Puede acceder al beneficio adicional");
}
else
{
    console.log("NO puede acceder al beneficio adicional");
}

/* !! */
/* Doble Negación. */
var valor1 = 0;
console.log(!!valor1); //return false.
valor1 = 1;
console.log(!!valor1); //return true.
valor1 = null;
console.log(!!valor1); //return false.
valor1 = undefined;
console.log(!!valor1); //return false.
valor1 = false;
console.log(!!valor1); //return false.
valor1 = true;
console.log(!!valor1); //return true.
valor1 = "prueba";
console.log(!!valor1); //return true.
valor1 = "";
console.log(!!valor1); //return false.
