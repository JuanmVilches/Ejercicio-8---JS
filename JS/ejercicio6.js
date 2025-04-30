// Escribe un programa que solicite al usuario un número que represente grados Celsius y conviértelo a Fahrenheit utilizando la fórmula: F = (C × 9/5) + 32. 

const celsius = +prompt ("Ingrese una temperatura en grados celsius.")

const farenheit = ((celsius * 9/5) + 32)

if (Number.isNaN(celsius)) {
    prompt("Ingrese un número.")
} else (
    console.log (`${farenheit}°F`)

)
