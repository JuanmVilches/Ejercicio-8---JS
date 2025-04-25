// Dado un array de palabras, crea un programa que devuelva un nuevo array con palabras 
// que tengan más de 5 letras. Por ejemplo: ["casa", "programación", "sol", "javascript", “texto”, 
// “html”, “bootstrap”, “css”, “nodejs”, “reactjs”, “for”] ; 

const arrayPalabras = ["casa", "programación", "sol", "javascript","texto", "html", "bootstrap","css","nodejs", "reactjs","for"]

const filtro = arrayPalabras.filter((palabra) =>{
    if (palabra.length > 5){
        return true
    }
})

console.log(filtro)
