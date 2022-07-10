//ENTREGA 1 (Utilizo lo hecho en clase para el curso de desarrollo web)

//El archivo .js se invoca desde el html productos

/*********************************E-COMMERCE sobre venta de indumentaria femenina****************************************************************/


//Declaro objeto generico a modo de ejemplo

const producto = {
     
     id:1,
     nombre:"Remera",
     precio:1000,
     stock:9999,
     descripcion:"Producto generico",
     cantidadEnCarrito:1
}
      

console.log(producto);

function Producto(Nuevo) {
    this.id = Nuevo.id;
    this.nombre = Nuevo.nombre;
    this.precio = Nuevo.precio;
    this.stock = Nuevo.stock;
    this.descripcion = Nuevo.descripcion;
    this.cantidadEnCarrito = Nuevo.cantidadEnCarrito;
    }

const producto1 = new Producto({    
        id:1,
        nombre:"Jean",
        precio:500,
        stock:0,
        descripcion:"Jeans clasicos",
        cantidadEnCarrito:0 });

    console.log(producto);

//Declaro funciones

function validarStock(producto) {
    const stock = producto.stock;
    console.log("El stock es de:"+ stock)
    if(producto.stock > 0){
        return 1;
    }else{
        return 0;
    }
}

function validarProductoEnCarrito(producto) {
    if(producto.cantidadEnCarrito > 0){
        return 1;
    }else{
        return 0;
    }
}


function agregarProductoCarrito(producto) {
    const tenemosStock = validarStock(producto);
    if(tenemosStock){
        console.log('Agregas el producto al carrito: ' + producto.nombre);
        producto.cantidadEnCarrito++;
    }else{
        console.log('Sin stock');
    }
    }


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

function obtenerPrecio(producto) {
         console.log("El precio del producto es: "+producto.precio)
     }

//Tests

console.log("obtenerPrecio");
obtenerPrecio(producto);  

console.log("agregarProductoCarrito");
agregarProductoCarrito(producto);

console.log("eliminarProductoCarrito");
eliminarProductoCarrito(producto);

//Producto1

console.log("obtenerPrecio");
obtenerPrecio(producto1);  

console.log("agregarProductoCarrito");
agregarProductoCarrito(producto1);

console.log("eliminarProductoCarrito");
eliminarProductoCarrito(producto1);
