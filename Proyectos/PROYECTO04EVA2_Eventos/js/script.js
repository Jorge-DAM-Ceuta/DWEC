function iniciaJuego(){
    let contenedorPuzzle = document.getElementById("puzzle");
    let piezas = [];
    let intentos = 0;

    cargarPuzzle();

    function cargarPuzzle(){
        let numeros = [];
        
        //Rellenamos el array de numeros de números del 1 al 16.
        for(let i = 0; i < 16; i++){
            numeros[i] = i + 1;
        }
    
        //Reemplazamos el array con las posiciones desordenadas.
        numeros = desordenarPiezas(numeros);
    
        //Recorremos el array de numeros desordenados.
        for(let j = 0; j < numeros.length; j++){
            //Creamos un elemento div para la pieza con su valor y añadimos draggable y una clase css.
            let pieza = document.createElement("div");
            pieza.textContent = numeros[j];
            pieza.draggable = true;
            pieza.className = "pieza";
    
        //Comprobamos la ubicación de la pieza para la primera carga de las piezas:
    
            //Obtenemos la fila y columna actuales de la pieza de la posición j.
            let filaActual = parseInt(j / 4);
            let columnaActual = j % 4;
    
            //Si el contenido de la pieza es igual al contador + 1 (para igualar los valores con el índice del array) está en su posición correcta.
            if(parseInt(pieza.textContent) == j + 1){
                pieza.classList.add("pieza_verde");
    
            //Si el valor de la pieza - 1 (para igualar los valores con el índice del array) entre 4 es igual a la fila actual o el resto de su valor entre 4 es igual a la columna actual.
            }else if((parseInt(pieza.textContent) - 1) / 4 == filaActual || (parseInt(pieza.textContent) - 1) % 4 == columnaActual){
                pieza.classList.add("pieza_naranja");
    
            //Si no se ha dado ninguno de los casos la pieza no está ni en su columna, ni su fila ni en la posición correcta.
            }else{
                pieza.classList.add("pieza_gris");
            }
    
        //Añadimos los eventos a las piezas.

            //Cuando la pieza empìece a arrastrarse. 
            pieza.addEventListener("dragstart", function(ev){
                //Mediante dataTransfer y su método setData obtendremos su valor para transferirlo a la nueva posición.
                ev.dataTransfer.setData("text/plain", ev.target.textContent);
            });
    
            //Cuando la pieza esté sobre otra pieza válida para intercambio.
            pieza.addEventListener("dragover", function(ev){
                //Eliminamos el comportamiento por defecto para poder soltarla en esa posición.
                ev.preventDefault();
            });
    
            //Cuando la pieza se suelta.
            pieza.addEventListener("drop", function(ev){
                //Eliminamos el comportamiento por defecto para poder soltarla en esa posición.
                ev.preventDefault();
    
                //Obtenemos el valor de la pieza que hemos arrastrado.
                let valorArrastrado = ev.dataTransfer.getData("text/plain");

                //Obtenemos el valor de la pieza sobre la que hemos soltado la otra pieza.
                let valorSoltado = ev.target.textContent;
    
                let indicePiezaArrastrada = 0;
                let indicePiezaSoltada = 0;
    
                //Recorremos el array de piezas y obtenemos el índice de la pieza que hemos arrastrado y el de la pieza donde hemos soltado la anterior.
                for(let i = 0; i < piezas.length; i++){
                    if(piezas[i].textContent == valorArrastrado){
                        indicePiezaArrastrada = i;
                    }else if(piezas[i].textContent == valorSoltado){
                        indicePiezaSoltada = i;
                    }
                }
    
                //Realizamos el intercambio de piezas.
                let respaldo = piezas[indicePiezaArrastrada].textContent;
                piezas[indicePiezaArrastrada].textContent = piezas[indicePiezaSoltada].textContent;
                piezas[indicePiezaSoltada].textContent = respaldo;
    
            });
            
            //Añadimos la pieza al array de piezas.
            piezas.push(pieza);
    
            //Añadimos la pieza al contenedor del puzzle.
            contenedorPuzzle.appendChild(pieza);
        }
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