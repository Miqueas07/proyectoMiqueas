let nombre
let apellido
const espacio = ' '

nombre = prompt("Como es tu nombre?")

apellido = prompt("Cual es tu apellido?")

let nombreCompleto = nombre+espacio+apellido

alert('Holaa '+nombreCompleto+' es un placer tenerte por aqui!')


let saludos = parseInt(prompt("Estamos tan felices de tenerte que te saludaremos las veces que quieras! Indica la cantidad de veces que quieres un saludo de nuetra parte"))

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

let dinero = parseInt(prompt("Cuanto dinero quieres pasar con la tarjeta?"))

let cuotas = parseInt(prompt("ingrese la cantidad de cuotas en las cuales quiere pagar ese dinero (1,2,3,6,12) \n selecione (0) para cancelar"))

let totalApagar 

do{
    switch(cuotas){
        case 1:
            console.log('lo va a pagar en 1 cuotas')
            totalApagar = dinero + (dinero*0.01)
            console.log("el total a pagar es de "+totalApagar)
            cuotas = parseInt(prompt("ingrese la cantidad de cuotas en las cuales quiere pagar ese dinero (1,2,3,6,12) \n selecione (0) para cancelar"))
            break;
        case 2: 
            console.log('lo va a pagar en 2 cuota')
            totalApagar = dinero + (dinero*0.03)
            console.log("el total a pagar es de "+totalApagar)
            cuotas = parseInt(prompt("ingrese la cantidad de cuotas en las cuales quiere pagar ese dinero (1,2,3,6,12) \n selecione (0) para cancelar"))
            break;
        case 3: 
            console.log('lo va a pagar en 3 cuota')
            totalApagar = dinero + (dinero*0.05)
            console.log("el total a pagar es de "+totalApagar)
            cuotas = parseInt(prompt("ingrese la cantidad de cuotas en las cuales quiere pagar ese dinero (1,2,3,6,12) \n selecione (0) para cancelar"))
            break;
        case 6: 
            console.log('lo va a pagar en 6 cuota')
            totalApagar = dinero + (dinero*0.10)
            console.log("el total a pagar es de "+totalApagar)
            cuotas = parseInt(prompt("ingrese la cantidad de cuotas en las cuales quiere pagar ese dinero (1,2,3,6,12) \n selecione (0) para cancelar"))
            break;
        case 12: 
            console.log('lo va a pagar en 12 cuota')
            totalApagar = dinero + (dinero*0.20)
            console.log("el total a pagar es de "+totalApagar)
            cuotas = parseInt(prompt("ingrese la cantidad de cuotas en las cuales quiere pagar ese dinero (1,2,3,6,12) \n selecione (0) para cancelar"))
            break;
        default:
            console.log('Ingresaste CUALQUIER COSA, lee bien!')
            cuotas = parseInt(prompt("ingrese la cantidad de cuotas en las cuales quiere pagar ese dinero (1,2,3,6,12) \n selecione (0) para cancelar"))
            break

    }
}while(cuotas != 0)
