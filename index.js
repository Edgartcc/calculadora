//Encontrar el número mayor de una lista de números en un array
  
let numeros = [5, 10 ,15, 60, 8]
let numeroMaximo = 0
let tamano = numeros.length //array.lenght me entrega la cantidad de posiciones de un arrya que creamos anteriormente

for(let i=0; i<tamano; i++) {
    if(numeroMaximo < numeros[i]) {
        numeroMaximo = numeros[i]
    }
}

console.log(numeroMaximo)

let maximo = Math.max(5, 10, 15, 60, 8)
console.log(maximo)