//Passwords ultrasecretas
let pass1 = '911';
let pass2 = '714';

//boton para capturar evento
let button = document.querySelector("#validaPassword");


//Evento click del boton 
button.addEventListener('click', function(){
    //Selects
    let select1 = document.querySelector("#clave1").value;
    let select2 = document.querySelector("#clave2").value;
    let select3 = document.querySelector("#clave3").value;
    
    //password Ingresada
    let password = select1 + select2 + select3;

    //Validación de password
    if(password == pass1){
        document.querySelector("#mensaje").innerHTML = 'Password 1 ingresada correctamente';
    }
    else if(password == pass2){
        document.querySelector("#mensaje").innerHTML = 'Password 2 ingresada correctamente';
    }
    else {
        document.querySelector("#mensaje").innerHTML = 'Password Incorrecta';
    }

});



