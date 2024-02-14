var user = document.getElementById("user").value;
var msj = document.getElementById("message");

function login(){
    msj.innerHTML = "Login correcto " + user;
}

function registro(){
    msj.innerHTML = "Registro correcto " + user;
}
