function iniciaListeners(){
    //Al hacer click en el documento se llama a la función.
    document.addEventListener("click", crearCirculo);
}

function crearCirculo(ev){
    //Creamos el elemento.
    let circulo = document.createElement("div");
    circulo.classList.add("circulo");
    
    //Obtenemos y añadimos el color de fondo.
    circulo.style.backgroundColor = `${obtenerColorAleatorio()}`;

    //Creamos unas dimensiones aleatorias para el diametro y le añadimos el tamaño.
    let diametro = (Math.random()*100)*2;
    circulo.style.width = `${diametro}px`;
    circulo.style.height = `${diametro}px`;

    //Añadimos los margenes obtenidos de las posiciones x e y del cliente restados al radio del circulo para centrarlo.
    circulo.style.top = `${ev.clientY - diametro / 2}px`;
    circulo.style.left = `${ev.clientX - diametro / 2}px`;

    //Añadimos el círculo al body.
    document.body.appendChild(circulo);
}

//Mediante un bucle for se obtendrán 5 valores de un string con los valores hexadecimales. 
function obtenerColorAleatorio(){
    let valoresHexadecimales = "0123456789ABCDEF";
    let color = "#";

    //En cada vuelta añadimos un valor aleatorio del string de valores al string color que contiene el formato para la propiedad CSS. 
    for(let i = 0; i <=5 ; i++){
        color += valoresHexadecimales[Math.floor(Math.random()*16)];
    }

    //Se devuelve el string con el color hexadecimal.
    return color;
}