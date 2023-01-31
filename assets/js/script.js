//Desafio 1.- Event Listener para imagen
let imagen = document.getElementById("img");
imagen.addEventListener('click', function() {
    if(document.querySelector("img").classList.contains("borde") == false){
        document.querySelector("img").classList.add("borde");
    }
    else {
        document.querySelector("img").classList.remove("borde");
    }
})