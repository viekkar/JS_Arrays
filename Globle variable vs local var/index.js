/* Globle variable vs Local variable

 */

let car = "Audi"; //Globle variable

function add() {

  let result = 22; //local variable
  
document.write(result);
}
add();


document.write ("<br>");
document.write(car);