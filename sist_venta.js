class Producto {

    static contadorProductos = 0;

    constructor (nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto (){
        return this._idProducto;
    }
    get nombre (){
        return this.nombre;
    }
    set nombre (nombre){
        this._nombre = nombre;
    }
    get precio () {
        return this.precio;
    }
    set precio (precio){
        this._precio = precio;
    }
    toString (){
        return `Id: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $${this._precio}`;
    }
}

let producto1 = new Producto('Arroz', 325);
console.log(producto1.toString());

let producto2 = new Producto('Carne', 80);
console.log(producto2.toString());

let producto3 = new Producto('Habichuelas', 35);

class Orden {

    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS (){
      return 5;  
    }
    constructor (){
        this._idOrdenes = ++Orden.contadorOrdenes;
        this._productos = [];
    }
    get idOrdenes (){
        return this._idOrdenes;
    }
    agregarProductos (producto){
        if (this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }
        else {
            console.log('No se pueden agregar mas productos');
        }
    }
    calcularTotal (){
        let totalVenta = 0;
        for (let producto of this._productos){
            totalVenta += producto._precio; 
        }
        return totalVenta;
    }
    mostrarOrden (){
        let productosOrden = '';
        for (let producto of this._productos){
            productosOrden += '\n' + producto.toString() + ' ';
        }
        console.log(`Orden:  ${this._idOrdenes} Total: ${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
    toString (){
        return this.idOrdenes;
    }
}

let orden1 = new Orden();
orden1.agregarProductos(producto1); //Relacion de agregacion
orden1.agregarProductos(producto2); 
orden1.mostrarOrden();

let orden2 = new Orden ();
orden2.agregarProductos(producto1);
orden2.agregarProductos(producto3);
orden2.agregarProductos(producto2);
orden2.agregarProductos(producto1);
orden2.agregarProductos(producto3);
orden2.agregarProductos(producto2); //No se imprimira porque el limite de productos es 5
orden2.mostrarOrden();


