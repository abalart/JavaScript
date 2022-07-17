//ENTREGA 1 (Utilizo lo hecho en clase para el curso de desarrollo web)

//El archivo .js se invoca desde el html products

/*********************************E-COMMERCE sobre venta de indumentaria femenina****************************************************************/
/*
//Declaro objeto generico a modo de ejemplo

const product = {
     
     id:1,
     name:"Remera",
     price:1000,
     stock:9999,
     descripcion:"product generico",
     shoppingCart:1
}
      

console.log(product);

function product(Nuevo) {
    this.id = Nuevo.id;
    this.name = Nuevo.name;
    this.price = Nuevo.price;
    this.stock = Nuevo.stock;
    this.descripcion = Nuevo.descripcion;
    this.shoppingCart = Nuevo.shoppingCart;
    }

const product1 = new product({    
        id:1,
        name:"Jean",
        price:500,
        stock:0,
        descripcion:"Jeans clasicos",
        shoppingCart:0 });

    console.log(product);

//Declaro funciones

function checkStock(product) {
    const stock = product.stock;
    console.log("El stock es de:"+ stock)
    if(product.stock > 0){
        return 1;
    }else{
        return 0;
    }
}

function checkProductInShoppingCart(product) {
    if(product.shoppingCart > 0){
        return 1;
    }else{
        return 0;
    }
}


function agregarproductCarrito(product) {
    const tenemosStock = checkStock(product);
    if(tenemosStock){
        console.log('Agregas el product al carrito: ' + product.name);
        product.shoppingCart++;
    }else{
        console.log('Sin stock');
    }
    }


function eliminarproductCarrito(product) {
    const enCarrito = checkProductInShoppingCart(product);
    if(enCarrito){
        console.log('Eliminando 1 stock de '+product.name+' del carrito');
        product.shoppingCart--;
        console.log('Quedan: '+product.shoppingCart+' en el carrito');
    }else{
        console.log('El product no está en carrito');
    }
 }

function obtenerprice(product) {
         console.log("El price del product es: "+product.price)
     }

//Tests

console.log("obtenerprice");
obtenerprice(product);  

console.log("agregarproductCarrito");
agregarproductCarrito(product);

console.log("eliminarproductCarrito");
eliminarproductCarrito(product);

//product1

console.log("obtenerprice");
obtenerprice(product1);  

console.log("agregarproductCarrito");
agregarproductCarrito(product1);

console.log("eliminarproductCarrito");
eliminarproductCarrito(product1);
*/
////// PRACTICAS /////



const numeros = [1, 2, 3, 4, 5];

for (let index = 0; index < numeros.length; index++) {
console.log(numeros[index])
}

console.log(numeros)

numeros.splice(0,2) //Elimina, el primer parametro es el indice desde donde comenzar a eliminar y el segundo la cantidad de elementos.

console.log("Se eliminaron elementos"+numeros)

numeros.push(990) //push agrega un nuevo elemento al final del array

console.log("Agrego un numero al final"+numeros)

numeros.unshift(0) //Agrega al comienzo

console.log("Agrego un numero al comienzo"+numeros)

numeros.shift() //Elimina un elemento del comienzo

console.log("Elimina un elemento del comienzo"+numeros)

numeros.pop()//Elimina un elemento del final

console.log("Elimina un elemento del final"+numeros)


numeros.unshift(-56)
console.log("Agrega un elemento al inicio "+numeros)

const palabras = ['hola','que','talco'];

console.log("Se agrega * entre elementos " + palabras.join('*'))

const unidos = numeros.concat(palabras) //concatena 2 arrays

console.log(unidos)
 
console.log("Slice "+palabras.slice(0,2))

console.log( numeros.indexOf(5) ) //El elemento 5  se encuentra en la posicion 3

console.log( numeros.includes(5) ) //Retorno si esta o no

console.log(numeros.reverse())

