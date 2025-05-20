// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7(hay que decir todos por los que es divisible)

const entrada = prompt("Ingrese un número para saber si es divisible por 2, 3, 5 y 7.")

if (entrada === null || isNaN(entrada) ||entrada.trim() === "") {

    alert("No ingresó un número.")

} else {

    numero = +entrada
    let divisible = false

    if (numero % 2 === 0) {
        alert(`El numero ${numero} es divisible por 2 `)
        divisible = true
    }

    if (numero % 3 === 0) {
        alert(`El numero ${numero} es divisible por 3 `)
        divisible = true
    }

    if (numero % 5 === 0) {
        alert(`El numero ${numero} es divisible por 5 `)
        divisible = true
    }

    if (numero % 7 === 0) {
        alert(`El numero ${numero} es divisible por 7 `)
        divisible = true
    }

    if (!divisible) {
        alert(`El numero ${numero} no es divisible por ninguno de esos números. `)
    }
}