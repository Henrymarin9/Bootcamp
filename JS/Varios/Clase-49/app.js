/*window es un metodo que se refiere a la ventana de la web */

/*
    window.addEventListener("load", cargoVentana())
    document.addEventListener("load", console.log("Cargo el documento"))
*/
let errores = document.getElementById("errores")
let nombre = ""
function verificarNombreYApellido(event){
    if(event.target.value){
        nombre = event.target.value
    }
    
}
let apellido =""
function verificarApellido(event){
    if(event.target.value !== "")
        apellido = event.target.value
}

let password = ""
function verificarPassword(event){
    if(event.target.value.length < 8){
        errores.innerText ="La contraceña tiene que tener mas de 8 caracteres"
    }else{
        errores.innerText = ""
    }
}

function registrarme(){
    let output = document.getElementById("output")
    output.innerHTML = `${n}`
}