// Solicita al usuario un número entero y calcula la multiplicación de todos los números desde 1 hasta ese número. Se debe imprimir por consola.

const numero = +prompt("Ingrese un número")

let i = 1

while (i <= numero) {
    const multiplicación = numero * i
    console.log(multiplicación)
    i++
}