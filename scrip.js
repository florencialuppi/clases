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
    //console.log(persona[prop])
}

/*let dos = document.getElementById("item2")
dos.innerText = "Hello"
let items = document.getElementsByClassName("item")
let lis = document.getElementsByTagName("li")
*/
//console.dir(items)

/* let dos = document.querySelector("#item2")
let items = document.querySelector(".item")
let lis = document.querySelectorAll("li")
console.dir(lis) */

//CREAR NODOS
let p = document.createElement("p")
p.innerText = "Nuevo Texto"
p.id = "nuevo"
p.className = "item"


//AGREGAR NODOS AL DOM
let body = document.querySelector("body")
body.appendChild(p)

/* 1)Crear un elemento <li> y ponerle un texto
   2)Meterlo como primer item del <ul>

EXTRA
1) Crear un elemento <ul> nuevo y vacio
2) Hacer un bucle de 5 iteraciones
3) Por iteracion de ciclo se tiene que crear un <li> nuevo
4) Agregar todos los <li> al <ul> del punto 1
5)Agregar el <ul> del punto 1 al DOM*/

let liNuevo = document.createElement("li")
liNuevo.innerText = "Lista1"
let ul = document.querySelector("ul")
let primer_li = document.querySelector("#item1")
ul.insertBefore(liNuevo,primer_li)

let nuevo_ul = document.createElement("ul")
for (let i=0; i<5 ;i++){
    let NuevoLi = document.createElement("li")
    NuevoLi.innerText = "Nuevo Texto" + i
    nuevo_ul.appendChild(NuevoLi)
}

body.appendChild(nuevo_ul)