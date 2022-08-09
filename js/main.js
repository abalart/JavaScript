//Agregando eventos

//El archivo .js se invoca desde el html productos
/***************************************E-COMMERCE sobre venta de indumentaria femenina*********************************************************/

//Declaro variables
const carrito = JSON.parse(localStorage.getItem('carrito')) ?? []; //Este array almacena los productos agregados al carrito, si contiene algo en memoria se usa lo almacenado, si no, array vacio
document.getElementById("cart-total").innerHTML = carrito.length;
const totalCarrito = localStorage.getItem("totalCarrito"); //Variable que se ve en local storage, cantidad total de productos en carrito
const montoTotal = localStorage.getItem("totalMonto");
document.getElementById("cart-total").innerHTML = totalCarrito;
document.getElementById("month-total").innerHTML = montoTotal; //almaceno monto total a pagar

let montoAcomulado = 0;


 

const productos = [  //Este array almacena los productos disponibles (simula la BD)
    {
        id: 1,
        nombre: "Almohada",
        precio: 1000,
        stock: 9999,
        descripcion: "Producto generico",
        cantidadEnCarrito: 1,
        imagen:  "../imagenes/Almohadon.JPG" 
    },
    {
        id: 2,
        nombre: "Almohadon ELLA",
        precio: 500,
        stock: 0,
        descripcion: "Almohadon  clasico",
        cantidadEnCarrito: 0,
        imagen:"../imagenes/bolsa-ella.JPG" 
    },
    {
        id: 3,
        nombre: "Aros",
        precio: 100,
        stock: 1,
        descripcion: "Bolsa de mano",
        cantidadEnCarrito: 1,
        imagen:  "../imagenes/aros2.JPG" 
    }
];

let cards = ""; //HTML a dibujar desde JS. Seran las cards que estaban estaticas en HTML

//Declaro funciones


//Renderisar la lista de productos en el carrito en forma de lista
//Usar funcion que valida si hay stock.

function imprimirArray(array) {
 
    for (const producto of array) {
    console.log(producto.id);
    console.log(producto.nombre);
    }
    }
    
    //Esta funcion valida si un producto cuenta con stock
    function validarStock(producto) {
        const stock = producto.stock;
        console.log("El stock es de:"+ stock)
        if(producto.stock > 0){
            return true;
        }else{
            return false;
        }
     }
     
     //Esta funcion valida si un producto se encuentra cargado en el carrito 
     function validarProductoEnCarrito(producto) {
        if(producto.cantidadEnCarrito > 0){
            return true;
        }else{
            return false;
        }
     }
     
     //Esta funcion obtiene el precio de un producto y lo imprime por consola web
     function obtenerPrecio(producto) {
        console.log("El precio del producto es: "+producto.precio)
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
            if(index!=-1){
                console.log('El producto a eliminar es: '+ producto.nombre)
                carrito.splice(index,1)
            }
            else{
                console.log('El producto no está en el carrito')
            }
           
        }
        console.log('Ahora la cantidad de productos es de: ' + carrito.length)
         
    }
    
    
    //Agregar producto al carrito
    
    function AgregarProducto()
    {
            let respuesta = prompt("Desea agregar un nuevo producto al carrito? Presione S para confirmar o N para denegar")
            switch(respuesta){
            case 'S': 
            const productoNuevo = {id:3,nombre:"Sombrero",precio:500,stock:23,descripcion:"Sombrero de mujer",cantidadEnCarrito:4 }
            carrito.push(productoNuevo)
            console.log('Los productos en el carrito son:' + carrito.length)
            console.log('El producto agregado es: '+carrito[carrito.length-1].nombre)
            alert('Producto agregado')
            break
            case 'N':
            alert('Usted no desa agregar nuevos productos al carrito')
            break
            default:
            alert('Respuesta invalida')
            break
            }
            console.log('Ahora la cantidad de productos es de: ' + carrito.length)
            
    }
    
    
    //Esta funcion verifica la existencia de un producto en el array carrito de compras
    function validarProductoEnCarrito2(producto){
        console.log(carrito.includes(producto)) 
        return carrito.includes(producto)
    }

 
function vaciarCarrito(){   //elimino los campos del carrito
    let boton_vaciar_carrito = document.getElementById("clear_cart_button")
    boton_vaciar_carrito.onclick = () => {
        localStorage.removeItem('totalMonto'),  //El monto acomulado
        localStorage.removeItem('totalCarrito'), //La cantidad de productos en carrito
        localStorage.removeItem('carrito'), //Los objetos producto
        alert("El carrito fue vaciado completamente")
        location.reload();
     }  
       
}

    /*   
    //Tests sobre array de objetos + simulacion de flujo
     
    console.log('****Imprimir array****')
    imprimirArray(carrito)
    
    console.log('****Elimino objeto producto****')
    
    eliminarProducto(producto1) //jean
    imprimirArray(carrito)
    
    console.log('****Valido objeto producto****')
    validarProductoEnCarrito2(producto2) //Ojota
    
    
    console.log('****Agregar objeto producto****')
    AgregarProducto()  
    imprimirArray(carrito)
    */
    



//Eventos, la informacion es tomada desde el array de productos, se dibuja una card por cada uno y se interactua con dicho html y atributos.
//Declaro de variables,arrays y objetos


productos.forEach((producto) => {   //Por cada elemento "producto" del arry productos se dibuja el siguiente HTML tomando los datos del array
    const idButton = `add-cart${producto.id}`
    document.getElementById("grilla_productos").innerHTML += 
`<div class="centroCard">    
  <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h2 class="texto_desc">Nombre: ${producto.nombre}</h2>
        <img src="${producto.imagen}" class="d-block w-10 img_prod">
        <p>Precio: ${producto.precio}</p>  
        <button  data-id="${producto.id}" id="${idButton}">Añadir al carrito</button>
    </div>     
    </div>  
</div>`
}) 

 productos.forEach((producto) => { 
     const idButton = `add-cart${producto.id}`
     document.getElementById(idButton).addEventListener('click', (event) => { //Defino un evento sobre el elemento idButton
     const nodo = event.target; //Guardo inforimacion sobre el evento producido
     const idProducto=nodo.getAttribute("data-id");
     const Indiceproducto = productos.findIndex(producto => producto.id == idProducto) //Busco el producto seleccionado por su id
     producto = productos[Indiceproducto]  //Guardo el producto seleccionado segun su lugar en el array
     //Valido si hay stock de ese producto
     if(validarStock(producto)){
        console.log("Tiene stock")
        console.log('El producto seleccionado es: ')
        console.log(producto.nombre)
        carrito.push(producto)
        producto.stock--
        console.log("El stock luego de comprar es: "+producto.stock)
        event.target.style.backgroundColor="Green";  //Marco en verde el producto seleccionado

     }else {
        console.log("No tiene stock")
        event.target.style.backgroundColor="Red";  //Marco en verde el producto seleccionado

     }
     //Agrego logica de boton de carrito, cada vez que agrego un elemento al array carrito, muestro su length en el HTML
     document.getElementById("cart-total").innerHTML = carrito.length;
     console.log(carrito);
     localStorage.setItem("totalCarrito",carrito.length);
     localStorage.setItem("carrito", JSON.stringify(carrito)); //Convierto a texto y guardo los productos en el local storage
     //Agrego monto total
     montoAcomulado+=carrito[Indiceproducto].precio;
     console.log(montoAcomulado);
     document.getElementById("month-total").innerHTML = montoAcomulado; //Ubico elemento HTML
     localStorage.setItem("totalMonto",montoAcomulado);   

 })
 });

 vaciarCarrito();