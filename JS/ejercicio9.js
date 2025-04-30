// Dado un array de números [8, 15, 23, 42, 16, 4, 10, 7, 19], escribe un programa que recorra el array y sume solo los elementos que están en posiciones pares (índices 0, 2, 4, etc.).

const arrayNumeros = [8, 15, 23, 42, 16, 4, 10, 7, 19]

let sumaIndicesPares = 0

arrayNumeros.forEach((num, i) =>{
    if( i%2 !== 0) return
    sumaIndicesPares += num
})

console.log(sumaIndicesPares)