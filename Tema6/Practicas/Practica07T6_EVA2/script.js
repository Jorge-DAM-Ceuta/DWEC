function agregarFila() {
    var textoInput = document.getElementById("texto");
   
    if (textoInput.value == "") {
        alert("Por favor, ingresa un texto antes de añadir la fila.");

    }else{
        var tBody = document.getElementById("bodyTabla");
        var nuevaFila = document.getElementById("fila1").cloneNode(true);
    
        nuevaFila.id = "fila" + (tBody.children.length + 1);

        nuevaFila.children[0].textContent = textoInput.value;
        nuevaFila.children[1].innerHTML = "<button onclick='convertirMayusculas(this)'>Mayúsculas</button>";
        nuevaFila.children[2].innerHTML = "<button onclick='aplicarFormatoChachi(this)'>Formato chachi</button>";
    
        tBody.appendChild(nuevaFila);
    }
}

function convertirMayusculas(boton) {
    var fila = boton.parentNode.parentNode;
    var texto = fila.children[0];

    if (texto.textContent == texto.textContent.toUpperCase()) {
        texto.textContent = texto.textContent.toLowerCase();
    } else {
        texto.textContent = texto.textContent.toUpperCase();
    }
}

function aplicarFormatoChachi(boton) {
    var fila = boton.parentNode.parentNode;
    var texto = fila.children[0];

    if(texto.classList.contains("formatoChachi")){
        texto.classList.remove("formatoChachi");
    }else{
        texto.classList.add("formatoChachi");
    }
}

function iniciarListener(){
    let botonAgregarFila = document.querySelector("button");
    botonAgregarFila.addEventListener("click", agregarFila);
}
