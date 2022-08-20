//Agregando eventos

//El archivo .js se invoca desde el html productos
/***************************************E-COMMERCE sobre venta de indumentaria femenina y productos para el hogar*********************************************************/

//Declaro variables
const carrito = JSON.parse(localStorage.getItem('carrito')) ?? []; //Este array almacena los productos agregados al carrito, si contiene algo en memoria se usa lo almacenado, si no, array vacio
document.getElementById("cart-total").innerHTML = carrito.length; //Inserto en el HTML el numero de productos en carrito
const totalCarrito = localStorage.getItem("totalCarrito"); //Variable que se ve en local storage, cantidad total de productos en carrito
const montoTotal = localStorage.getItem("totalMonto");
document.getElementById("cart-total").innerHTML = totalCarrito;
document.getElementById("month-total").innerHTML = montoTotal; //almaceno monto total a pagar
<<<<<<< HEAD
=======

let montoAcomulado = 0;

//Invoco a API dolarsi para obtener el valor del dolar oficial y asi convertir mis precios
fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
.then( (resp) => resp.json() )
.then( (data) => {
    let valorDolarOficial = data[0].casa.compra
    localStorage.setItem("valorDolarOficial", valorDolarOficial);  //Guardo el valor para acceder globalmente
})
>>>>>>> desarrollo

let montoAcomulado = 0;

<<<<<<< HEAD
=======

let valorDolarOficial = localStorage.getItem('valorDolarOficial');
valorDolarOficial = parseFloat(valorDolarOficial)
console.log("El valor del dolar es:" + valorDolarOficial)

>>>>>>> desarrollo
const productos = [  //Este array almacena los productos disponibles (simula la BD)
    {
        id: 1,
        nombre: "Almohada",
<<<<<<< HEAD
        precio: 1000,
=======
        precio: parseFloat((1000/valorDolarOficial).toFixed(3)), //limito cantidad de digitos
>>>>>>> desarrollo
        stock: 9999,
        descripcion: "Producto especial",
        cantidadEnCarrito: 0,
        imagen:  "../imagenes/Almohadon.JPG" 
    },
    {
        id: 2,
        nombre: "Almohadon ELLA",
<<<<<<< HEAD
        precio: 500,
=======
        precio: parseFloat(500/valorDolarOficial).toFixed(3),
>>>>>>> desarrollo
        stock: 0,
        descripcion: "Almohadon  clasico",
        cantidadEnCarrito: 0,
        imagen:"../imagenes/bolsa-ella.JPG" 
    },
    {
        id: 3,
        nombre: "Aros",
<<<<<<< HEAD
        precio: 100,
=======
        precio: parseFloat((100/valorDolarOficial).toFixed(3)), //Parseo a float porque me lo toma como strings
>>>>>>> desarrollo
        stock: 3,
        descripcion: "Aros",
        cantidadEnCarrito: 0,
        imagen:  "../imagenes/aros2.JPG" 
    },
    {
        id: 4,
        nombre: "Cartera negra",
<<<<<<< HEAD
        precio: 500,
=======
        precio: parseFloat((500/valorDolarOficial).toFixed(3)),
>>>>>>> desarrollo
        stock: 2,
        descripcion: "Cartera",
        cantidadEnCarrito: 0,
        imagen:  "../imagenes/cartera negra.JPG" 
    }
];

let cards = ""; //HTML a dibujar desde JS. Seran las cards que estaban estaticas en HTML

//Declaro funciones

//Proximos agregados:
//Renderisar la lista de productos en el carrito en forma de lista
<<<<<<< HEAD
=======
//1 Buscar por id, insertar en HTML, recorrer carrito.
//Agregar o quitar productos del carrito por separado
>>>>>>> desarrollo


function imprimirArray(array) {
 
    for (const producto of array) {
    console.log(producto.id);
    console.log(producto.nombre);
             }
    }
    
    //Esta funcion valida si un producto cuenta con stock (version optimizada)
    function validarStock(producto) {
        const stock = producto.stock
        console.log(stock)
        if(stock > 0) {
            return true;
        }
        else {
           return false;
         }
                
     }
     
     //Esta funcion valida si un producto se encuentra cargado en el carrito  
     function validarProductoEnCarrito(producto) {
        if(producto.cantidadEnCarrito > 0) {
            return true;
        }
            else {
                return false;
            }
     }
         
     //Elimina producto, version con funcion
     function eliminarProductoCarrito(producto) {
        const enCarrito = validarProductoEnCarrito(producto);
        if(enCarrito){
            console.log('Eliminando 1 stock de '+producto.nombre+' del carrito');
            producto.cantidadEnCarrito--;
            console.log('Quedan: '+producto.cantidadEnCarrito+' en el carrito');
        }else{
            console.log('El producto no está en carrito');
        }
         }
     
    
    //Esta funcion elimina un producto del carrito por medio de su id
    function eliminarProducto(producto){
        if(validarProductoEnCarrito){
            const productoEliminar = producto.id;
            const index = carrito.findIndex( x => x.id === productoEliminar );
          
           index!=-1? carrito.splice(index,1):console.log('El producto no está en el carrito')  //Optimizado
        }
        console.log('Ahora la cantidad de productos es de: ' + carrito.length)
    }
    
    
    
    
    //Esta funcion verifica la existencia de un producto en el array carrito de compras
    function validarProductoEnCarrito2(producto){
        console.log(carrito.includes(producto)) 
        return carrito.includes(producto)
    }

 function actualizarPantalla(){
    location.reload();
 }

function vaciarCarrito(){   //elimino los campos del carrito
    let boton_vaciar_carrito = document.getElementById("clear_cart_button")
    boton_vaciar_carrito.onclick = () => {
        localStorage.removeItem('totalMonto'),  //El monto acomulado
        localStorage.removeItem('totalCarrito'), //La cantidad de productos en carrito
        localStorage.removeItem('carrito'), //Los objetos producto
        Swal.fire({
            icon: 'success',
            title: 'Carrito de compras vaciado',
          })
          setTimeout(actualizarPantalla, 1000);
       
     }  
       
}


//Eventos, la informacion es tomada desde el array de productos, se dibuja una card por cada uno y se interactua con dicho html y atributos.
//Declaro de variables,arrays y objetos


productos.forEach((producto) => {   //Por cada elemento "producto" del arry productos se dibuja el siguiente HTML tomando los datos del array
    const idButton = `add-cart${producto.id}`
    document.getElementById("grilla_productos").innerHTML += 
`<div class="centroCard">    
  <div class="card" style="width: 18rem">
    <div class="card-body">
        <h2 class="texto_desc">${producto.nombre}</h2>
        <img src="${producto.imagen}" class="d-block w-10 img_prod">
<<<<<<< HEAD
        <p>Precio: ${producto.precio}</p>  
=======
        <p>Precio: USD $${producto.precio}</p> 
        <p>Stock: ${producto.stock}</p> 
>>>>>>> desarrollo
        <button  data-id="${producto.id}" id="${idButton}">Añadir al carrito</button>
    </div>     
    </div>  
</div>`
}) 

 productos.forEach((producto) => { 
     const idButton = `add-cart${producto.id}`
     document.getElementById(idButton).addEventListener('click', (event) => { //Defino un evento sobre el elemento idButton DE CADA card
     const nodo = event.target; //Guardo informacion sobre el evento producido
     const idProducto=nodo.getAttribute("data-id");
     const Indiceproducto = productos.findIndex(producto => producto.id == idProducto) //Busco el producto seleccionado por su id
     producto = productos[Indiceproducto]  //Guardo el producto seleccionado segun su lugar en el array
     console.log("idProducto:"+idProducto)
     console.log("Indiceproducto:"+Indiceproducto)
     //Valido si hay stock de ese producto
     if(validarStock(producto)){
        console.log("Tiene stock")
        console.log('El producto seleccionado es: ')
        console.log(producto.nombre)
        carrito.push(producto)
        Toastify({
            text: "Producto agregado al carrito",
<<<<<<< HEAD
            duration: 3000, 
=======
            duration: 4000, 
            position: "right", 
            gravity: "bottom",
>>>>>>> desarrollo
            style: {
                background: "linear-gradient(to right, #ffaa7f, #ffaa7f)",
              }
            }).showToast();
        producto.stock--
        console.log("El stock luego de comprar es: "+producto.stock)
        event.target.style.backgroundColor="Green";  //Marco en verde el producto seleccionado
        //Agrego monto total
        let pre =  productos[Indiceproducto].precio;
        console.log("el precio es:"+pre);
        montoAcomulado+=productos[Indiceproducto].precio;  
     }else {
        console.log("No tiene stock")
        Swal.fire({
            icon: 'error',
            title: 'Producto seleccionado sin stock',
          })
        event.target.style.backgroundColor="Red";  //Marco en verde el producto seleccionado

     }
     //Agrego logica de boton de carrito, cada vez que agrego un elemento al array carrito, muestro su length en el HTML
     document.getElementById("cart-total").innerHTML = carrito.length;
     console.log(carrito);
     localStorage.setItem("totalCarrito",carrito.length);
     localStorage.setItem("carrito", JSON.stringify(carrito)); //Convierto a texto y guardo los productos en el local storage
     
<<<<<<< HEAD
     
=======
>>>>>>> desarrollo
     console.log("El monto acomulado:"+montoAcomulado);
     document.getElementById("month-total").innerHTML = montoAcomulado; //Ubico elemento HTML
     localStorage.setItem("totalMonto",montoAcomulado);   

 })
 });

<<<<<<< HEAD
 vaciarCarrito(); //Se invoca por medio de evento Onclick
=======
 vaciarCarrito(); //Se invoca por medio de evento Onclick


>>>>>>> desarrollo
