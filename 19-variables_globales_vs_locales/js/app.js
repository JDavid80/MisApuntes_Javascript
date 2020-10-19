/* Variable global */
var theSum = 0;
addNumber();
function addNumber() {
    theSum = 2 + 2;
}
console.log(theSum);

/* Variable local */
function asignarEdad() {
    var edad = 5 + 3;
}
/*En la línea 17 se disparará un error
  ya que no podemos llamar a una
  variable local desde afuera de la
  función en la cual se declaro: */
console.log(edad);
