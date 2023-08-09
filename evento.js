document.addEventListener("DOMContentLoaded",function(){

    let contenedor = document.getElementById("divClick")
    contenedor.addEventListener("click", function(){
        alert('Hola! Soy el div.')
    })

    let boton = document.getElementById("boton")
    boton.addEventListener("click", function(evento){
        alert('Hola!')
        evento.stopImmediatePropagation();
    })
})

