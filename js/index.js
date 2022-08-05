let nombre
let apellido
const espacio = ' '

nombre = prompt("Como es tu nombre?")

apellido = prompt("Cual es tu apellido?")

let nombreCompleto = nombre + espacio + apellido

alert('Holaa ' + nombreCompleto + ' es un placer tenerte por aqui!')


/*let saludos = parseInt(prompt("Estamos tan felices de tenerte que te saludaremos las veces que quieras! Indica la cantidad de veces que quieres un saludo de nuetra parte"))

const bienvenida = "Buenass ";

// la variable " i " no es necesaria mostrarla

for (i = 0; i < saludos; i++) {

    console.log(bienvenida + nombre);

}

let palabrasAmostrar = prompt('Ingresa las palabras que quieras para formar una frase u oracion, para finalizar escribe "ESC"');

let cadena = ""; // guardar esta variable sin espacios, ya que el espacio cuenta como un carácter

console.log(cadena);

while (palabrasAmostrar != "ESC") {

    cadena += palabrasAmostrar + "\n"; // "\n" ===> es igual a un enter, pone uno abajo del otro

    // "+="" operador que reemplaza a "cadena = cadena + "

    palabrasAmostrar = prompt("Ingresa otra palabra. Para finalizar escribe ESC");

}


alert(cadena); // saludando al cliente
*/

alert('Queridos clientes a continuacion les mostraremos los nuevos precios de los servicios a realizar debido a la reciente suba tan brusta del dolar')


const servicios = [
    {'nombre': 'Esmaltado semipermanente manos', 'precio': 1300},
    {'nombre': 'Esmaltado semipermanente pies', 'precio': 1200},
    {'nombre': 'capping en acrilico', 'precio': 1500},
    {'nombre': 'manicura rusa manos', 'precio': 1000},
    {'nombre': 'pedicura rusa', 'precio': 1000},
    {'nombre': 'retirado semipermanente', 'precio': 300}
]

const serviciosActualizados = servicios.map( (e) => e.precio * 2)

/*for(servicios of nombre){
    console.log(`${servicios.nombre} precio: ${servicios.precio}`)
}*/



let cuotas
let totalApagar
let decision = prompt("Vas a pagar en efectivo o con tarjeta?")

if (decision == "efectivo") {
    console.log("Pagas el total sin intereses")
}

if (decision == "tarjeta") {

    
    let dinero = parseInt(prompt("Cuanto dinero quieres pasar con la tarjeta?"))

    let cuotas = parseInt(prompt("ingrese la cantidad de cuotas en las cuales quiere pagar ese dinero (1,2,3,6,12) \n selecione (0) para cancelar"))
    let totalApagar
    imprimirCuotas(dinero,cuotas,totalApagar)

}

function imprimirCuotas(dinero,cuotas,totalApagar) {

    do {
        switch (cuotas) {
            case 1:
                console.log('lo va a pagar en 1 cuotas')
                totalApagar = dinero + (dinero * 0.01)
                console.log("el total a pagar es de " + totalApagar)
                cuotas = parseInt(prompt("ingrese la cantidad de cuotas en las cuales quiere pagar ese dinero (1,2,3,6,12) \n selecione (0) para cancelar"))
                break;
            case 2:
                console.log('lo va a pagar en 2 cuota')
                totalApagar = dinero + (dinero * 0.03)
                console.log("el total a pagar es de " + totalApagar)
                cuotas = parseInt(prompt("ingrese la cantidad de cuotas en las cuales quiere pagar ese dinero (1,2,3,6,12) \n selecione (0) para cancelar"))
                break;
            case 3:
                console.log('lo va a pagar en 3 cuota')
                totalApagar = dinero + (dinero * 0.05)
                console.log("el total a pagar es de " + totalApagar)
                cuotas = parseInt(prompt("ingrese la cantidad de cuotas en las cuales quiere pagar ese dinero (1,2,3,6,12) \n selecione (0) para cancelar"))
                break;
            case 6:
                console.log('lo va a pagar en 6 cuota')
                totalApagar = dinero + (dinero * 0.10)
                console.log("el total a pagar es de " + totalApagar)
                cuotas = parseInt(prompt("ingrese la cantidad de cuotas en las cuales quiere pagar ese dinero (1,2,3,6,12) \n selecione (0) para cancelar"))
                break;
            case 12:
                console.log('lo va a pagar en 12 cuota')
                totalApagar = dinero + (dinero * 0.20)
                console.log("el total a pagar es de " + totalApagar)
                cuotas = parseInt(prompt("ingrese la cantidad de cuotas en las cuales quiere pagar ese dinero (1,2,3,6,12) \n selecione (0) para cancelar"))
                break;
            default:
                console.log('Ingresaste CUALQUIER COSA, lee bien!')
                cuotas = parseInt(prompt("ingrese la cantidad de cuotas en las cuales quiere pagar ese dinero (1,2,3,6,12) \n selecione (0) para cancelar"))
                break

        }
    } while (cuotas != 0)
}








