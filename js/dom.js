 
//Acceso por id de elemento
let h3 = document.getElementById("h3_productos");
 
console.log(h3.innerText);
 
h3.innerText = "Cambio texto interno";

console.log(h3.innerText);



//*****/

// Crear nodo de tipo Elemento, etiqueta p
let parrafo = document.createElement("p");
// Insertar HTML interno
parrafo.innerHTML = "<h2>¡Hola Coder!</h2>";
// Añadir el nodo Element como hijo de body
document.body.append(parrafo);

/* >> Consigna: Traslada al proyecto integrador el concepto de objetos, visto en la clase de hoy. En función del
tipo de simulador que hayas elegido, deberás:
- Crear elementos manipulando el DOM a partir de la informaciòn de tus objetos.
- Modificar etiquetas existentes en función del resultado de operaciones.
>>Aspectos a incluir en el entregable:
Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que
incluya la definición de un algoritmo en JavaScript que opere sobre el DOM, modificando, agregando o eliminado
elementos.
>>Ejemplo:
Podemos crear elementos HTML en función del listado de nuestros objetos identificados en la clase 6.
Establecer un mensaje de bienvenida aleatorio usando un array de mensajes.
Capturar una o màs entradas por promp() y mostrarlas en el HTML, modificando el DOM */


 