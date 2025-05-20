// Escribe un programa que solicite al usuario un número que represente grados Celsius y conviértelo a Fahrenheit utilizando la fórmula: F = (C × 9/5) + 32. 

let celsius

do {
    celsius = prompt("Ingrese una temperatura en grados celsius.")
} while (celsius === null || isNaN(celsius) || celsius.trim() === "" )

const farenheit = ((celsius * 9 / 5) + 32)
console.log(`${farenheit}°F`)




