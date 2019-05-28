let btn = document.querySelector("button")

//EVENTO: Ejecucion  de una funcion (callback)como respuesta una accion

//window.hacerClick = function(){} ->otra forma de escribirlo
function hacerClick (){
    console.log("Click")
}

//Sintaxis de eventos -> Nodo.addEventListener(evento,callback)

//btn.addEventListener("click",hacerClick)

/*
reemplazar el código de la funcion  hacer click:

1)Crear un boton por cada click que se haga
2)Cada boton nuevo se tiene que ver en el DOM
3)Cada boton nuevo tiene que tener un callback en su propio evento click tambien
4)Todos los botones en pantalla tienen que tener como texto "boton N", donde N es un
numero arrancando de 1 el cual se va aumentando de a una unidad.
*/

let contador = 1

function clickhace(){

    let btn2 = document.createElement("button")
    btn2.innerText = "Boton" + contador
    let body = document.querySelector("body")
    body.appendChild(btn2)
    contador = contador + 1
    btn2.addEventListener("click", funcionParaTodosBtn)
    
}
btn.addEventListener("click", clickhace)

function funcionParaTodosBtn (){
    console.log("Click en los botones")
}

//Para el punto 3 tengo que meter el evento en la primera function
