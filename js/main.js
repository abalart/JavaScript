/*
Desafio 1

- Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una
salida por cada resultado

let acomulador=0;
 
acomulador=parseInt(prompt("Ingrese un valor"));

for(let i=0;i<3;i++){
    acomulador=acomulador+i;
    console.log(acomulador);
}
console.log(acomulador);
alert(acomulador);

 
document.write(acomulador);
*/
    //Desafio 2
/*
    Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script
    src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que
    emplee bucles e instrucciones condicionales.

    (Cantidad de Par o impar dentro de X numero ingresado)


let Numero=0;
 
Numero=parseInt(prompt("Ingrese un valor"));
CantidadDePares=0;
CantidadDeImpares=0;

for(let i=0;i<Numero;i++){ 
    if(i%2==0){
        alert("El numero es par"+" "+i);
        CantidadDePares++;
    }
    else{
        CantidadDeImpares++;
        alert("El numero es impar"+" "+i);
    }
}

alert("La cantidad de pares es:"+" "+CantidadDePares);
alert("La cantidad de impares es:"+" "+CantidadDeImpares);

/*- Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida
por cada resultado, hasta que se ingresa “ESC”.
 //Desafio 3



let entrada=null;

entrada=prompt("Ingrese un valor");

while(entrada !="ESC"){
    console.log(entrada+"X");
    entrada+='X';
    alert(entrada);
    entrada=prompt("Ingrese un valor");
}
alert("Ingresaste ESC");



/*- Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces
ingresada. */
 //Desafio 4
/*
let entrada2=0;

CantidadDeVeces=parseInt(prompt("Ingrese un valor"));

for(let i=0;i<=CantidadDeVeces;i++){
    console.log("Hola"+" "+i);
    alert("Hola");
}
*/
const variableLocal = localStorage.setItem('bienvenida', '¡Hola Coder!');  //Clave valor
localStorage.setItem('esValido', true);
localStorage.setItem('unNumero', 20);

let mensaje = localStorage.getItem('bienvenida');

console.log(mensaje); // ‘¡Hola Coder!’