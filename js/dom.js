/****************************Entrega opcional DOM***************************/
//Declaro variables
let articulosCarrito = []; //Array que tendra los articulos a comprar

console.log("Array Carrito vacio:"+articulosCarrito);

 //Obtener todos los productos y agregarlos al array articulosCarrito

 let todosLosProductos = document.getElementsByTagName("p");

 console.log("los prod son: ");
//Recorro el articulosCarrito
 for (const prod of todosLosProductos) {
    console.log(prod.innerHTML);
    articulosCarrito.push(prod.innerHTML)
    }
 console.log("Luego de insertar en arrayCarrito: "+articulosCarrito)


//Crear un div "carrito" con el nombre  de ciertos elementos web

console.log("Inserto elemento");
// Crear nodo de tipo Elemento y etiqueta div
let div = document.createElement("div");
// Insertar HTML interno
div.innerHTML = "<h2 id=carrito_div1>CARRITO!</h2>";
// Añadir el nodo Element como hijo de body
document.body.append(div);


 console.log("Inserto elemento a modificar");
// Crear nodo de tipo Elemento y etiqueta div
let elementoAmodifocar = document.createElement("div");
// Insertar HTML interno
elementoAmodifocar.innerHTML = "<h2 id=carrito_div>CARRITO!</h2>";
// Añadir el nodo Element como hijo de body
document.body.append(elementoAmodifocar);

//Modifico elemento insertado con la lista del array articulosCarrito

 let carrito = document.getElementById("carrito_div");
 carrito.innerText = articulosCarrito   


