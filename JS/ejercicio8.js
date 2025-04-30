// Dado un array de números [5, -1, -7, 10, 3, -2, 8, -9, 4, -4, 7, 1, 6]escribe un programa que cree un nuevo array solo con los números positivos y lo imprima.

const arrayNumeros = [5, -1, -7, 10, 3, -2, 8, -9, 4, -4, 7, 1, 6]

const numerosPositivos = arrayNumeros.filter (numero => {
    if (numero > 0) return true
})

console.log(numerosPositivos)