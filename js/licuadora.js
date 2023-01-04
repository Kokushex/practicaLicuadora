let estado = "apagado";
let licuadora = document.getElementById("blender");

function controlador(){
    if(estado == "apagado"){
        estado = "encendido";
        licuadora.classList.add("active");
    }else{
        estado = "apagado"
        licuadora.classList.remove("active");
    }
}