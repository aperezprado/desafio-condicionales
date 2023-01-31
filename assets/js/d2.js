let button = document.querySelector(".calcular");
button.addEventListener('click', function() {
    let s1 = document.querySelector("#s1").valueAsNumber;
    let s2 = document.querySelector("#s2").valueAsNumber;
    let s3 = document.querySelector("#s3").valueAsNumber;
    let suma = s1+s2+s3;
    if(suma > 0 && suma <=10){
        document.querySelector("#mensaje").innerHTML = 'Llevas '+suma+' stickers!';
    }
    else if(suma == 0){
        document.querySelector("#mensaje").innerHTML = 'Debes indicar cuantos stickers llevas';
    }
    else {
        document.querySelector("#mensaje").innerHTML = 'Llevas demasiados stickers';
    }
})

