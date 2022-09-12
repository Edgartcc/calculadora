//suma, resta, multiplicación, división
functioncalculadora(num1,operador, num2)
  {
let resultado;
switch (operador) {  // Utilice la estructura de control de Switch
case "+": resultado = num1 + num2;
break;
case "-": resultado = num1 - num2;
break;
case "*": resultado = num1 * num2;
break;
case "/": resultado = num1 / num2;
break;
default:  resultado = "Operador inexistente" // Cuando se ingrese cualquier otro dato que no sea uno de los operadores aritmeticos, aparecera este mensaje.
break;
    }
    console.log(resultado);
  }

num1 = parseInt(prompt("Ingrese un numero ")); // Utilice la funcion "parseInt" para devolver un numero entero del string; y el metodo "prompt" para mostrar un dialogo con mensaje opcional, que solicite al usuario que introduzca un texto.
operador = prompt("Elija operador: +, -, *, / ");
num2 = parseInt(prompt("Ingrese otro numero "));
console.log(num1, num2);


calculadora(num1, operador, num2); // Llame a la funciòn
