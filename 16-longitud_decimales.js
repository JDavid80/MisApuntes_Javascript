var promedio = 2.596482;
promedio = promedio.toFixed(1);
console.log(promedio);
/* Sin redondeo de decimales */
var prom = 3.555;
promStr = prom.toString();
if (promStr.charAt(promStr.length - 1 === "5")) {
    promStr = promStr.slice(0, promStr.length - 1) + 6;
}
prom = Number(promStr);
newProm = prom.toFixed(2);
console.log("Resultado: " + newProm);

