//ENTREGA 1 (Utilizo lo hecho en clase para el curso de desarrollo web)

//El archivo .js se invoca desde el html productos

/***************************************E-COMMERCE sobre venta de indumentaria femenina*********************************************************/


//Declaro de variables,arrays y objetos
 

//Objetos de tipo producto
const producto = {
    id:1,
    nombre:"Remera",
    precio:1000,
    stock:9999,
    descripcion:"Producto generico",
    cantidadEnCarrito:1
}
 
const producto1 = {    
       id:2,
       nombre:"Jean",
       precio:500,
       stock:0,
       descripcion:"Jeans clasicos",
       cantidadEnCarrito:0 
    }

const producto2 = {    
    id:3,
    nombre:"Ojota",
    precio:100,
    stock:1,
    descripcion:"Ojotas marca Brasil",
    cantidadEnCarrito:1 
    }
    

let carrito = [producto,producto1]  //Este array almacenara los productos agregados al carrito

console.log('*Los productos en el carrito son: ' + carrito.length)
imprimirArray(carrito)

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
   
//Tests sobre array de objetos + simulacion de flujo
 
console.log('****Imprimir array****')
imprimirArray(carrito)

console.log('****Elimino objeto producto****')

eliminarProducto(producto1) //jean
imprimirArray(carrito)

console.log('****Valido objeto producto****')
validarProductoEnCarrito2(producto2) //Ojota


console.log('****Agregar objeto producto****')
AgregarProducto()  //Version con array objeto
imprimirArray(carrito)




