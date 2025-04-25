// Dado un array de números [10, 20, 30, 40, 50, 60, 63, 79, 81, 95], crea un programa que calcule e imprima el promedio de los números en el array.

const arrayDeNumeros = [10, 20, 30, 40, 50, 60, 63, 79, 81, 95]

let sumaNumeros = 0

arrayDeNumeros.forEach((numero) => {

sumaNumeros += numero
})

sumaNumeros = sumaNumeros / arrayDeNumeros.length

console.log (sumaNumeros)