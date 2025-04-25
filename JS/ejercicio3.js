// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7(hay que decir todos por los que es divisible)

const numero = +prompt("Ingrese un número para saber si es divisible por 2, 3, 5 y 7.")

const divisible2 = numero % 2
const divisible3 = numero % 3
const divisible5 = numero % 5
const divisible7 = numero % 7

if (divisible2 == 0){
    alert(`El número ${numero} es divisible por 2.`)
}

if (divisible3 == 0){
    alert(`El número ${numero} es divisible por 3.`)
}

if (divisible5 == 0){
    alert(`El número ${numero} es divisible por 5.`)
}

if (divisible7 == 0){
    alert(`El número ${numero} es divisible por 7.`)
}