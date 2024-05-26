let contraseñaInput=document.querySelector("#password");
let contraseñaConfirmarInput=document.querySelector("#confirmPassword");
let parrafo=document.querySelector("#alerta");

function compararContraseñas(){
    contraseña=contraseñaInput.value;
    contraseñaConfirmar=contraseñaConfirmarInput.value;
    if(contraseña!=contraseñaConfirmar){
        contraseñaConfirmarInput.classList.add('invalid');
        contraseñaInput.classList.add('invalid');
        parrafo.textContent='*Passwords do not match';
    }else{
        contraseñaConfirmarInput.classList.remove('invalid');
        contraseñaInput.classList.remove('invalid');
        parrafo.textContent='';
    }
}

contraseñaInput.addEventListener("keyup",compararContraseñas);
contraseñaConfirmarInput.addEventListener("keyup",compararContraseñas);



