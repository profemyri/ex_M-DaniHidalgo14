//Escribe aquí tu código JavaScript
let envio = document.getElementById("envio");
envio.addEventListener("mouseover", function(){
    envio.style.backgroundColor = "white";
})
envio.addEventListener("mouseout", function(){
    envio.style.backgroundColor = "blue"
})

document.getElementById("instrucciones").oninput = function(){
    document.getElementById("contador").textContent = this.value.length;
}

function confirmar(event){
    if(!confirm("¿Desea enviar el pedido?")){
        event.preventDefault();
    }
}
function modoOscuro(){
    if(document.body.style.backgroundColor === "black"){
        document.getElementById("modoOscuro");
        document.body.style.backgroundColor = "#faf3e0";
    }else{
        document.getElementById("modoOscuro");
        document.body.style.backgroundColor = "black";
    }
}

document.getElementById("envio").onclick = function(event){
    const nombre = document.getElementById("nombre").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();

    if(nombre === "" || !email.contains("@") || direccion.length < 18 || telefono.lengt < 9){
        alert("Hay campos obligatorios sin rellenar");
    }
}

