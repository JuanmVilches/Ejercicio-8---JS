// Crea un programa que solicite la fecha de nacimiento del usuario (en formato YYYY-MM-DD) y calcule su edad en días.

const fechaNacimiento = prompt("Ingrese su fecha de nacimiento en formato YYYY-MM-DD")

const hoy = new Date(fechaNacimiento)
const actual = new Date()
const resta = actual - hoy
console.log (resta)
console.log (hoy)
console.log(hoy.getFullYear())
console.log(hoy.getMonth())
// const numero = Number(hoy)
// console.log (numero)

// const input = prompt("Ingresa tu fecha de nacimiento (formato YYYY-MM-DD):");

// const nacimiento = new Date(input);
// const hoy = new Date();

// // Verifica si la fecha es válida
// if (isNaN(nacimiento)) {
//     alert("Fecha inválida. Asegúrate de usar el formato correcto: YYYY-MM-DD");
// } else {
//     const milisegundosPorDia = 1000 * 60 * 60 * 24;
//     const diferencia = hoy - nacimiento;
//     const edadEnDias = Math.floor(diferencia / milisegundosPorDia);

//     alert(`Tenés aproximadamente ${edadEnDias} días de edad.`);
// }
