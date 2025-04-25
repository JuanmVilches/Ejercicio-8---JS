// Dado un array de números [15, 42, 3, 18, 90, 67, 29], escribe un programa que encuentre e imprima el segundo número más grande del array. 

const arrayNumeros = [15, 42, 3, 18, 90, 67, 29]

arrayNumeros.sort((a,b)=>{
    if (a<b) return -1
    if (a>b) return 1
})

console.log(arrayNumeros[arrayNumeros.length - 2])