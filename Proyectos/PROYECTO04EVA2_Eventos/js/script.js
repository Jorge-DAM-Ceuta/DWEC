function iniciaJuego(){
    let contenedorPuzzle = document.getElementById("puzzle");
    let piezas = [];
    let intentos = 0;

}

function cargarPuzzle(){
    let piezas = [];

    //Rellenamos el array de piezas de números del 1 al 16.
    for(let i = 0; i < 16; i++){
        piezas[i] = i + 1;
    }

    //Reemplazamos el array con las posiciones desordenadas.
    piezas = desordenarPiezas(piezas);

    //Recorremos el array de piezas desordenadas.
    for(let j = 0; j < piezas.length; j++){
        //Creamos la pieza con su valor y añadimos draggable y una clase css.
        let pieza = document.createElement("div");
        pieza.textContent = piezas[j];
        pieza.draggable = true;
        pieza.className = "pieza";

    }
}

function desordenarPiezas(piezas){
    //Recorremos el array de piezas.
    for(let posicionActual = 0; posicionActual < piezas.length; posicionActual++){
        //Obtenemos una posición aleatoria.
        let posicionAleatoria = parseInt(Math.random() * piezas.length);

        //Intercambiamos la pieza actual por una aleatoria.
        let respaldo = piezas[posicionActual];
        piezas[posicionActual] = piezas[posicionAleatoria];
        piezas[posicionAleatoria] = respaldo;
    }

    //Devolvemos las piezas desordenadas.
    return piezas;
}

function comprobarPuzzle(){

}