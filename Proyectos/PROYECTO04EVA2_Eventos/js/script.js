//Esta función contiene el contenedor de las piezas, el array que contendrá cada elemento del contenedor y un número de intentos.
function iniciaJuego(){
    let contenedorPuzzle = document.getElementById("puzzle");
    let piezas = [];
    let intentos = 0;

    //Se llama a la función cargarPuzzle.
    cargarPuzzle();

    //Esta función está dentro de la función iniciaJuego para poder acceder a sus variables y trabajar con el array piezas.
    function cargarPuzzle(){
        //Array que contendrá los valores para cada pieza.
        let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        
        //Asociamos las imágenes con sus correspondientes valores.
        let imagenes = {
            1: "./images/fila-1-columna-1.jpg",
            2: "./images/fila-1-columna-2.jpg",
            3: "./images/fila-1-columna-3.jpg",
            4: "./images/fila-1-columna-4.jpg",
            5: "./images/fila-2-columna-1.jpg",
            6: "./images/fila-2-columna-2.jpg",
            7: "./images/fila-2-columna-3.jpg",
            8: "./images/fila-2-columna-4.jpg",
            9: "./images/fila-3-columna-1.jpg",
            10: "./images/fila-3-columna-2.jpg",
            11: "./images/fila-3-columna-3.jpg",
            12: "./images/fila-3-columna-4.jpg",
            13: "./images/fila-4-columna-1.jpg",
            14: "./images/fila-4-columna-2.jpg",
            15: "./images/fila-4-columna-3.jpg",
            16: "./images/fila-4-columna-4.jpg"
        };
    
        //Reemplazamos el array con las posiciones desordenadas.
        numeros = desordenarPiezas(numeros);
    
        //Recorremos el array de numeros desordenados.
        for(let j = 0; j < numeros.length; j++){
            //Creamos un elemento div para la pieza con su valor y añadimos draggable y una clase css.
            let pieza = document.createElement("div");
            pieza.textContent = numeros[j];
            pieza.draggable = true;
            pieza.className = "pieza";

            //Añadimos a la pieza la imagen de fondo obtenida del valor de la misma posición del array números.
            let imagen = imagenes[numeros[j]];
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

            //Cuando la pieza empiece a arrastrarse. 
            pieza.addEventListener("dragstart", function(ev){
                //Mediante dataTransfer y su método setData obtendremos su valor para transferirlo a la nueva posición.
                ev.dataTransfer.setData("text/plain", ev.target.textContent);
                
                //Se aplica transparencia a la pieza que se empieza a arrastrar.
                ev.target.style.opacity = "0.25";
            });
    
            //Cuando la pieza esté sobre otra pieza válida para intercambio.
            pieza.addEventListener("dragover", function(ev){
                //Eliminamos el comportamiento por defecto para poder soltarla en esa posición.
                ev.preventDefault();

                //Añadimos un resaltado azul sobre la pieza.
                ev.target.style.boxShadow = "0 0 10px 5px blue";
            });

            //Cuando la pieza deja de hacer dragover sobre otra pieza válida para intercambio.
            pieza.addEventListener("dragleave", function(ev){
                //Eliminamos el comportamiento por defecto para poder soltarla en esa posición.
                ev.preventDefault();

                //Eliminamos el resaltado.
                ev.target.style.boxShadow = "none";
            });
    
            //Usamos dragend para poder restablecer el color de la pieza si se suelta sobre un punto que no es draggable.
            pieza.addEventListener("dragend", function(ev) {
                //Restablecemos la opacidad de la pieza.
                ev.target.style.opacity = "1";
            });

            //Cuando la pieza se suelta.
            pieza.addEventListener("drop", function(ev){
                //Eliminamos el comportamiento por defecto para poder soltarla en esa posición.
                ev.preventDefault();

                //Eliminamos el resaltado.
                ev.target.style.boxShadow = "none";

                //Se devuelve el total de opacidad a todas las piezas.
                for(let i = 0; i < piezas.length; i++){
                   piezas[i].style.opacity = "1";
                }
    
                //Obtenemos el valor de la pieza que hemos arrastrado.
                let valorArrastrado = ev.dataTransfer.getData("text/plain");

                //Obtenemos el valor de la pieza sobre la que hemos soltado la otra pieza.
                let valorSoltado = ev.target.textContent;
    
                //Le asignamos -1 al principio para evitar que al hacer drop sobre la misma casilla se intercambie por la pieza de otra casilla.
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
    
                //Reemplazamos el contenido y la imagen de fondo. 
                let respaldoTexto = piezas[indicePiezaArrastrada].textContent;
                let respaldoImagen = piezas[indicePiezaArrastrada].style.backgroundImage;

                piezas[indicePiezaArrastrada].textContent = piezas[indicePiezaSoltada].textContent;
                piezas[indicePiezaArrastrada].style.backgroundImage = piezas[indicePiezaSoltada].style.backgroundImage;

                piezas[indicePiezaSoltada].textContent = respaldoTexto;
                piezas[indicePiezaSoltada].style.backgroundImage = respaldoImagen;
    
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

        //Si todas las piezas están en su posición correspondiente
        if(todasCorrectas == true){
            //Recorremos el array de piezas
            for(let i = 0; i < piezas.length; i++){
                //Eliminamos las clases css y el atributo draggable.
                piezas[i].classList.remove("pieza_verde", "pieza_naranja", "pieza_gris");
                piezas[i].setAttribute("draggable", "false");
                piezas[i].style.cursor = "default";

                //Creamos un clon de la pieza para anular los eventos asociados para no poder mover más las piezas y mantener el aspecto del puzzle terminado.
                let piezaReemplazo = piezas[i].cloneNode(true);

                //Reemplazamos la pieza por su clon.
                contenedorPuzzle.replaceChild(piezaReemplazo, piezas[i]);
            }

            //Asignamos menor margen entre las piezas para visualizar mejor la imagen. 
            contenedorPuzzle.style.columnGap = "1px";
            contenedorPuzzle.style.rowGap = "1px";
            
            //Centramos el contenedor.
            contenedorPuzzle.style.marginBottom = "0vh";
            contenedorPuzzle.style.marginTop = "1vh";

            //Creamos y mostramos un mensaje con el número de intentos.
            let resultadoIntentos = document.createElement("h2");
            resultadoIntentos.textContent = `!Has resuelto el puzzle en ${intentos} moviminentos!`;

            //Creamos un botón para reiniciar el puzzle.
            let reiniciarBoton = document.createElement("button");
            reiniciarBoton.textContent = "Volver a intentarlo";

            //Con este evento al pulsar sobre el botón reiniciaremos el puzzle.
            reiniciarBoton.addEventListener("click", function(){
                //Eliminamos el contenedor, el mensaje y el botón.
                contenedorPuzzle.remove();
                resultadoIntentos.remove();
                reiniciarBoton.remove();

                //Creamos un nuevo contenedor con el mismo id.
                let contenedorPuzzleNuevo = document.createElement("div");
                contenedorPuzzleNuevo.setAttribute("id", "puzzle");
                document.body.appendChild(contenedorPuzzleNuevo);

                //Reiniciamos el juego.
                iniciaJuego();
            });


            //Añadimos el botón al mensaje con el resultado y los añadimos al body.
            resultadoIntentos.appendChild(reiniciarBoton);
            document.body.appendChild(resultadoIntentos);
        }
    }
}

//Esta función intercambia posiciones en el array.
function desordenarPiezas(numeros){
    //Recorremos el array de números.
    for(let posicionActual = 0; posicionActual < numeros.length; posicionActual++){
        //Obtenemos una posición aleatoria.
        let posicionAleatoria = parseInt(Math.random() * numeros.length);

        //Intercambiamos la pieza actual por una aleatoria.
        let respaldo = numeros[posicionActual];
        numeros[posicionActual] = numeros[posicionAleatoria];
        numeros[posicionAleatoria] = respaldo;
    }

    //Devolvemos los números desordenadas.
    return numeros;
}