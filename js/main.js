//Agregando eventos

//El archivo .js se invoca desde el html productos
/***************************************E-COMMERCE sobre venta de indumentaria femenina*********************************************************/
//Declaro funciones

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
            return 1;
        }else{
            return 0;
        }
     }
     
     //Esta funcion valida si un producto se encuentra cargado en el carrito 
     function validarProductoEnCarrito(producto) {
        if(producto.cantidadEnCarrito > 0){
            return 1;
        }else{
            return 0;
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

const carrito = []; //Este array almacena los productos agregados al carrito

const productos = [  //Este array almacena los productos disponibles (simula la BD)
    {
        id: 1,
        nombre: "Almohada",
        precio: 1000,
        stock: 9999,
        descripcion: "Producto generico",
        cantidadEnCarrito: 1
    },
    {
        id: 2,
        nombre: "Almohadon",
        precio: 500,
        stock: 0,
        descripcion: "Almohadon  clasico",
        cantidadEnCarrito: 0
    },
    {
        id: 3,
        nombre: "Bolsa de mano",
        precio: 100,
        stock: 1,
        descripcion: "Bolsa de mano",
        cantidadEnCarrito: 1
    }
];

let cards = ""; //HTML a dibujar desde JS. Seran las cards que estaban estaticas en HTML

console.log("Version con eventos");

productos.forEach((producto) => {   //Por cada elemento "producto" del arry productos se dibuja el siguiente HTML tomando los datos del array
    const idButton = `add-cart${producto.id}`
    document.getElementById("grilla_productos").innerHTML += 
`<div class="centroCard">    
  <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h2>Nombre: ${producto.nombre}</h2>
        <p>Precio: ${producto.precio}</p>  
        <button  data-id="${producto.id}" id="${idButton}">Añadir al carrito</button>
    </div>     
    </div>  
</div>`
}) 

 productos.forEach((producto) => { 
    const idButton = `add-cart${producto.id}`
    document.getElementById(idButton).addEventListener('click', (event) => { //Defino un evento sobre el elemento idButton
     event.target.style.backgroundColor="Green";  //Marco en verde el producto seleccionado
     const nodo = event.target; //Guardo inforimacion sobre el evento producido
     const idProducto=nodo.getAttribute("data-id");
     const Indiceproducto = productos.findIndex(producto => producto.id == idProducto) //Busco el producto seleccionado por su id
     producto = productos[Indiceproducto]  //Guardo el producto seleccionado segun su lugar en el array
     console.log('El producto seleccionado es: ')
     console.log(producto.nombre)
     carrito.push(producto)
 })
 });

