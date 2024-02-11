//Esta función contiene el contenedor de las piezas, el array que contendrá cada elemento del contenedor y un número de intentos.
function iniciaJuego(){
    let contenedorPuzzle = document.getElementById("puzzle");
    let piezas = [];
    let intentos = 0;

    //Se llama a la función cargarPuzzle.
    cargarPuzzle();

    //Esta función está dentro de la función iniciaJuego para poder acceder a sus variables y trabajar con el array piezas.
    function cargarPuzzle(){
        //Array que contendrá los valores.
        let imagenes = [];
        
        //Rellenamos el array de números de números del 1 al 16.
        for(let i = 0; i < 16; i++){
            let filaActual = parseInt(i / 4) + 1;
            let columnaActual = (i % 4) + 1;
            
            imagenes.push(`./images/fila-${filaActual}-columna-${columnaActual}.jpg`);
        }
    
        //Reemplazamos el array con las posiciones desordenadas.
        imagenes = desordenarPiezas(imagenes);
    
        //Recorremos el array de numeros desordenados.
        for(let j = 0; j < imagenes.length; j++){
            //Creamos un elemento div para la pieza con su valor y añadimos draggable y una clase css.
            let pieza = document.createElement("div");
            pieza.draggable = true;
            pieza.className = "pieza";

            //Añadimos a la pieza la imagen de fondo.
            let imagen = imagenes[j];
            pieza.style.backgroundImage = `url(${imagen})`;
    
        //Comprobamos la ubicación de la pieza para la primera carga de las piezas:
    
            //Obtenemos la fila y columna actuales de la pieza de la posición j.
            let filaActual = parseInt(j / 4);
            let columnaActual = j % 4;
    
            //Si el contenido de la pieza es igual al contador + 1 (para igualar los valores con el índice del array) está en su posición correcta.
            if(parseInt(pieza.textContent) == j + 1){
                //Añadimos un color verde a la pieza.
                pieza.classList.add("pieza_verde");
    
            //Si el valor de la pieza - 1 (para igualar los valores con el índice del array) entre 4 es igual a la fila actual o el resto de su valor entre 4 es igual a la columna actual.
            }else if(parseInt((parseInt(pieza.textContent) - 1) / 4) == filaActual || (parseInt(pieza.textContent) - 1) % 4 == columnaActual){
                //Añadimos un color naranja a la pieza.
                pieza.classList.add("pieza_naranja");
    
            //Si no se ha dado ninguno de los casos la pieza no está ni en su columna, ni su fila ni en la posición correcta.
            }else{
                //Añadimos un color gris a la pieza.
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
    
                //Le asignamos -1 al principio para evitar que al hacer drop sobre la misma casilla se intercambie por la pieza de la primera casilla.
                let indicePiezaArrastrada = -1;
                let indicePiezaSoltada = -1;
    
                //Recorremos el array de piezas.
                for(let i = 0; i < piezas.length; i++){
                    //Si encontramos el mismo valor en el array que el del elemento arrastrado, obtenemos su índice.
                    if(piezas[i].textContent == valorArrastrado){
                        indicePiezaArrastrada = i;

                    //Si encontramos el mismo valor en el array que el del elemento donde hemos soltado, obtenemos su índice.
                    }else if(piezas[i].textContent == valorSoltado){
                        indicePiezaSoltada = i;
                    }
                }
    
                //Realizamos el intercambio de piezas.
                let respaldo = piezas[indicePiezaArrastrada].textContent;
                piezas[indicePiezaArrastrada].textContent = piezas[indicePiezaSoltada].textContent;
                piezas[indicePiezaSoltada].textContent = respaldo;
    
                //Llamaremos a esta función cada vez que se arrastre un elemento para actualizar los colores de cada pieza y comprobar si se ha terminado el puzzle.
                comprobarPuzzle();
            });
            
            //Añadimos la pieza al array de piezas.
            piezas.push(pieza);
    
            //Añadimos la pieza al contenedor del puzzle.
            contenedorPuzzle.appendChild(pieza);
        }
    }

    function comprobarPuzzle(){
        /*Con esta variable comprobaremos si todas las piezas están en sus correspondientes 
        posiciones para terminar el juego y mostrar el número de intentos. Empieza valiendo
        true, si en alguna comprobación de una pieza no está en su posicion correcta, esta
        se setea a false.*/
        let todasCorrectas = true;

        //Aumentamos el contador de intentos por cada pieza que se suelta.
        intentos++;

        //Recorremos el array de piezas.
        for(let i = 0; i < piezas.length; i++){
            //Obtenemos la pieza actual.
            let pieza = piezas[i];

            //Obtenemos la fila y columna actuales.
            let filaActual = parseInt(i / 4);
            let columnaActual = i % 4;

            //Eliminamos todas las clases css que pueda tener el elemento.
            pieza.classList.remove("pieza_verde", "pieza_naranja", "pieza_gris");
            
            //Si el contenido de la pieza es igual al contador + 1 (para igualar los valores con el índice del array) está en su posición correcta.
            if(parseInt(pieza.textContent) == i + 1){
                //Añadimos un color verde a la pieza.
                pieza.classList.add("pieza_verde");
    
            //Si el valor de la pieza - 1 (para igualar los valores con el índice del array) entre 4 es igual a la fila actual o el resto de su valor entre 4 es igual a la columna actual.
            }else if(parseInt((parseInt(pieza.textContent) - 1) / 4) == filaActual || (parseInt(pieza.textContent) - 1) % 4 == columnaActual){
                //Añadimos un color naranja a la pieza.
                pieza.classList.add("pieza_naranja");

                //Se setea a false la variable todasCorrectas.
                todasCorrectas = false;

            //Si no se ha dado ninguno de los casos la pieza no está ni en su columna, ni su fila ni en la posición correcta.
            }else{
                //Añadimos un color gris a la pieza.
                pieza.classList.add("pieza_gris");

                //Se setea a false la variable todasCorrectas.
                todasCorrectas = false;
            }
        }

        //Si todas las piezas están en su posición correspondiente se muestra un mensaje con el número de intentos.
        if(todasCorrectas == true){
            let resultadoIntentos = document.createElement("h2");
            resultadoIntentos.textContent = `!Has resuelto el puzzle en ${intentos} intentos!`;

            document.body.appendChild(resultadoIntentos);
        }
    }
}

//Esta función intercambia posiciones en el array.
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