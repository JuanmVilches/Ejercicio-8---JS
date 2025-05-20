// Crea un programa que solicite la fecha de nacimiento del usuario (en formato YYYY-MM-DD) y calcule su edad en días.

let fechaNacimiento;
let hoy = new Date();

do {
    fechaNacimiento = prompt("Ingrese su fecha de nacimiento en formato YYYY-MM-DD:");
} while (
    fechaNacimiento === null ||
    fechaNacimiento.trim() === "" ||
    isNaN(new Date(fechaNacimiento))
);

let nacimiento = new Date(fechaNacimiento);

let diferencia = hoy - nacimiento;

let edadEnDias =Math.floor(diferencia / (1000 * 60 * 60 * 24));

alert(`Tenés ${edadEnDias} días de edad.`);
























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
