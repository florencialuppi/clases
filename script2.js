// Tener un elemento con que trabajar
let btn = document.querySelector("button")
let body = document.querySelector ("body")

//El body es uno de los nodos que no hace falta seleccionar para usarla ya que esta en document.body

// A ese elemento le asigno un evento
btn.addEventListener("click", hacerClick)
//Tener el callback disponible
function hacerClick(){
    let div = document.createElement("div")
    let p = document.createElement("p")
    let btn_nuevo = document.createElement("button")

    p.innerText = "lorem ipsum"
    btn_nuevo.innerText = "borrar"
    btn_nuevo.addEventListener("click",borrarElemento)

    function borrarElemento(){
        document.body.removeChild(div)
    }

    div.appendChild(p)
    div.appendChild(btn_nuevo)
    document.body.addEventListener(div)  
}