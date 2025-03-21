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

