//Escribe aquí tu código JavaScript
let envio = document.getElementById("envio");
envio.addEventListener("mouseover", function(){
    if(envio.style.backgroundColor === "blue"){
        envio.style.backgroundColor = "white";
    }else{
        envio.style.backgroundColor = "blue";
    }
})

document.getElementById("instrucciones").oninput = function(){
    document.getElementById("contador").textContent = this.value.length;
}

