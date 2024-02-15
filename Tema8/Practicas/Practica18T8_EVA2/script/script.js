export function iniciaListeners(){
    //Si se hace doble click se setea a true la variable y se lanza una excepción/error por consola
    document.addEventListener("dblclick", function(){
        //Lanzamos una nueva excepción con throw creando un objeto Error con el mensaje. 
        throw new Error("Interacción errónea");
    });
    
    //Al hacer click en el documento se llama a la función.
    document.addEventListener("click", function(ev){
        //Si es click del botón izquierdo:
        if(ev.button == 0){
            //Creamos un círculo y lo añadimos al documento.
            crearCirculo(ev);
        } 
    });

    //Asignamos el evento contextmenu al documento que se lanza con el click derecho para desactivar su función por defecto.
    document.addEventListener("contextmenu", function(ev){
        //Eliminamos su comportamiento por defecto.
        ev.preventDefault();

        //Creamos un círculo y lo añadimos al documento.
        crearCuadrado(ev);
    });
}

function crearCirculo(ev){
    //Creamos el elemento y le asignamos la clase CSS círculo.
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

function crearCuadrado(ev){
    //Creamos el elemento y le asignamos la clase CSS cuadrado.
    let cuadrado = document.createElement("div");
    cuadrado.classList.add("cuadrado");
    
    //Obtenemos y añadimos el color de fondo.
    cuadrado.style.backgroundColor = `${obtenerColorAleatorio()}`;

    //Creamos unas dimensiones aleatorias para el diametro y le añadimos el tamaño.
    let diametro = (Math.random()*100)*2;
    cuadrado.style.width = `${diametro}px`;
    cuadrado.style.height = `${diametro}px`;

    //Añadimos los margenes obtenidos de las posiciones x e y del cliente restados al radio del cuadrado para centrarlo.
    cuadrado.style.top = `${ev.clientY - diametro / 2}px`;
    cuadrado.style.left = `${ev.clientX - diametro / 2}px`;

    //Añadimos el círculo al body.
    document.body.appendChild(cuadrado);
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