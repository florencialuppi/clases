let nombre = "Florencia"
let apellido = "Luppi"
let nombre_completo = nombre + "" + apellido

let numeros = [10,14,20,25,"Flor",true]
numeros.push("Hola")
numeros.push(45)

let persona = {
    nombre : "Florencia",
    edad: 21,
    vive : true
}

//persona.trabaja = false
//persona.tienePerrito = 2
//console.log(persona)

for(let i=0; i<numeros.length ; i++){
    console.log(numeros[i])
}

for (prop in persona){
    console.log(persona[prop])
}