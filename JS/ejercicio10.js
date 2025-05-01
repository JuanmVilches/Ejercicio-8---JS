//  Dado un array con elementos repetidos [1, 2, 3, 1, 4, 5, 2, 6, 5, 1, 2, 4, 2, 1,5, 8, 7, 4], crea un programa que devuelva un nuevo array sin duplicados

const arrayRepetidos = [1, 2, 3, 1, 4, 5, 2, 6, 5, 1, 2, 4, 2, 1,5, 8, 7, 4]

const numerosOrdenados = arrayRepetidos.sort((a,b) =>{
    if (a<b) return -1
    if (a>b) return 1
    return 0
})

const arraySinRepetidos = []

numerosOrdenados.forEach ((num)=>{
if (!arraySinRepetidos.includes(num)){
    arraySinRepetidos.push(num)
}
})

console.log(arraySinRepetidos)