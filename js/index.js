let nombre
let apellido
const espacio = ' '

nombre = prompt("Como es tu nombre?")

apellido = prompt("Cual es tu apellido?")

let nombreCompleto = nombre+espacio+apellido

alert('Holaa '+nombreCompleto+' es un placer tenerte por aqui!')


let saludos = parseInt(prompt("Estamos tan felices de tenerte que te saludaremos las veces que quieras! Indica la cantidad de veces que quieres un saludo de nuetra parte"))

const bienvenida = 'Buenass '

for(i = 0 ; i < saludos; i++){
    console.log(bienvenida+nombre+i)
 }



 let palabrasAmostrar = prompt('Ingresa las palabras que quieras para formar una frase u oracion, para finalizar escribe "ESC"')

 
 let cadena = ' '
 
 console.log(cadena)
 
 while(palabrasAmostrar != 'ESC'){
      cadena = cadena + palabrasAmostrar
 
      palabrasAmostrar = prompt('Ingresa otra palabra')
  }
 
  console.log(cadena)
