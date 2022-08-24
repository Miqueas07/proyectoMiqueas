


//----------------Funciones-----------//
let productos = [];

function generarId(numero) {
    return numero + 1
}

function agregarElemento() {

    class Producto {
        constructor(id, articulo, stock, precio) {
            this.id = id;
            this.articulo = articulo;
            this.stock = stock;
            this.precio = precio;

        }
    }

    //reemplazo del if por un operador ternario
    localStorage.length === 0 ?

        listaMemoria = []

        :

        listaMemoria = JSON.parse(localStorage.getItem('listaProductos'));

    let id = generarId(listaMemoria.length);


    (async () => {

        const { value: articulo } = await Swal.fire({
            title: "Ingrese el producto",
            input: "text",
            showCancelButton: false,
            inputValidator: (value) => {
                if (!value) {
                    return "Por favor ingrese un producto";
                }
            },
        });

        const { value: stock } = await Swal.fire({
            title: "Ingrese el Stock",
            input: "text",
            showCancelButton: false,
            inputValidator: (value) => {
                if (!value) {
                    return "Por favor ingrese el stock";
                }
            },
        });

        const { value: valor } = await Swal.fire({
            title: "Ingrese el Precio",
            input: "text",
            showCancelButton: false,
            inputValidator: (value) => {
                if (!value) {
                    return "Por favor ingrese un valor";
                }
            },
        });


        productos.push(new Producto(id, articulo, stock, valor));

        listaMemoria.push(new Producto(id, articulo, stock, valor));

        localStorage.setItem('listaProductos', JSON.stringify(listaMemoria));

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto agregado correctamente',
            showConfirmButton: false,
            timer: 1500
        })

        setTimeout(() => {
            location.reload()
        }, 1600);

    })(); //cierre del async

} //final de la funcion agregar elemento

//Funcion para eliminar producto
function eliminarProducto(productID) {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Producto eliminado',
        showConfirmButton: false,
        timer: 1500
    })
    eliminarProductoLocalStorage(productID);
}

function eliminarProductoLocalStorage(productID) {
    let productosLS = JSON.parse(localStorage.getItem('listaProductos'));

    productosLS = productosLS.filter(elemento => elemento.id != productID);

    localStorage.setItem('listaProductos', JSON.stringify(productosLS));

    setTimeout(() => {
        location.reload()
    }, 1600);
}
//fin de eliminar producto

//funcion modificar productos
function editarElemento(producID) {

    (async () => {

        const { value: opcion } = await Swal.fire({
          title: "Ingrese el item a editar",
          input: "text",
          inputLabel: '1-Producto 2- Stock 3- Precio',
          showCancelButton: false,
          inputValidator: (value) => {
            if (!value) {
              return "Por favor ingrese un valor";
            }
          },
        });

        modificarProducto (opcion, producID)

    })(); //cierre del async

}

function modificarProducto(opcion, id){
    let productosLS = JSON.parse(localStorage.getItem('listaProductos'));
    if(opcion == 1){
        (async () => {

            const { value: nombreProducto } = await Swal.fire({
              title: "Ingrese el nuevo nombre",
              input: "text",
              showCancelButton: false,
              inputValidator: (value) => {
                if (!value) {
                  return "Por favor ingrese un valor";
                }
              },
            });
            
            let elemento = productosLS.find(elemento => elemento.id == id);
            elemento.nombre = nombreProducto;
            
            localStorage.setItem('listaProductos', JSON.stringify(productosLS));

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'El nombre se modificó correctamente',
                showConfirmButton: false,
                timer: 1500
            })

            setTimeout(() => {
                location.reload()
            }, 1600);

        })(); //cierre del async

    }else if(opcion == 2){
            (async () => {

                const { value: stockProducto } = await Swal.fire({
                  title: "Ingrese el nuevo stock",
                  input: "text",
                  showCancelButton: false,
                  inputValidator: (value) => {
                    if (!value) {
                      return "Por favor ingrese un valor";
                    }
                  },
                });

            let elemento = productosLS.find(elemento => elemento.id == id);
            elemento.stock = stockProducto;

            localStorage.setItem('listaProductos', JSON.stringify(productosLS));

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'El stock se modificó correctamente',
                showConfirmButton: false,
                timer: 1500
        })
                setTimeout(() => {
                    location.reload()
                }, 1600);

            })(); //cierre del async

    }else if(opcion == 3){
            (async () => {

                const { value: precioProducto } = await Swal.fire({
                  title: "Ingrese el nuevo precio",
                  input: "text",
                  showCancelButton: false,
                  inputValidator: (value) => {
                    if (!value) {
                      return "Por favor ingrese un valor";
                    }
                  },
                });
            
            let elemento = productosLS.find(elemento => elemento.id == id);
            elemento.precio = precioProducto;

            localStorage.setItem('listaProductos', JSON.stringify(productosLS));

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'El precio se modificó correctamente',
                showConfirmButton: false,
                timer: 1500
            })

                setTimeout(() => {
                    location.reload()
                }, 1600);

            })(); //cierre del async

    }else{

    }

}
//--------------Cierre----Funciones-----------//

//------------TABLA---------------------------//
if(localStorage.length === 0){

}else{

//---------Parseado de datos con JSON desde local storage-------------

let listaProds = JSON.parse(localStorage.getItem('listaProductos'))

//---------Acá distribuye los elementos en la tabla-----------------

let tablaProds = document.getElementById("listado")

for (const producto of listaProds) {

let filas = document.createElement("tr")

filas.innerHTML = `
                    <td>${producto.id}</td>
                    <td>${producto.articulo}</td>
                    <td>$ ${producto.precio}</td>
                    <td>${producto.stock}</td>
                    <td id="editar${producto.id}"> <a href="#" "><img src="../img/iconoEditar.png" alt="editar" width="20px"></a></td>
                    <td id="borrar${producto.id}"><button type="button" class="btn-close btn-close-white" aria-label="Close"></button> </td>
                    `;

tablaProds.appendChild(filas);

document.getElementById(`editar${producto.id}`).addEventListener("click", () => {editarElemento(`${producto.id}`);});

document.getElementById(`borrar${producto.id}`).addEventListener("click", () => {eliminarProducto(`${producto.id}`);});

}; //cierre del for

}; //cierre del else

//----------------Captura de botones y acciones----------------------------

document.getElementById("agregar").addEventListener("click", () => {agregarElemento();});