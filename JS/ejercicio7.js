// Pide al usuario una frase y cuenta cuántas palabras tiene.

const frase = prompt("Ingrese una frase.")

const fraseArray = frase.trim().split(/\s+/)

console.log(fraseArray)
alert(`La frase "${frase}" tiene ${fraseArray.length} palabras`)