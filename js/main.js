let valorUno=null;
let valorDos=null;

valorUno=prompt("Ingrese un valor");
valorDos=prompt("Ingrese otro valor");

if(valorUno == valorDos){
    alert("Los valores son iguales")
}
 else{
    alert("Los valores son distintos")
 }


//Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.

let valorNumerico=null;
 
valorNumerico=prompt("Ingrese un valor");
valorNumerico=parseInt(valorNumerico);

if(valorNumerico > 1000){
    alert("El numero es mayor a 1000")
}
 else{
    alert("El numero es menor a 1000")
 }

 

// Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.

let entrada=null;
 
entrada=prompt("Ingrese un valor");
 
if(entrada == 'Hola'){
    alert("Usted a ingresado Hola")
}
 else{
    alert("Usted no ingreso Hola")
 }
 

// Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert 

let valorNumerico2=null;
 
valorNumerico2=prompt("Ingrese un valor numerico");
valorNumerico2=parseInt(valorNumerico2);

if(valorNumerico2 > 10 && valorNumerico2 < 50){
    alert("El numero se encuentra entre 10 y 50")
}
 else{
    alert("El numero no se encuentra entre 10 y 50")
 }
