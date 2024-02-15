function iniciarScript(){
    //Creamos un elemento p para mostrar el resultado.
    let resultado = document.createElement("p");

    //Iniciamos la promesa con un tiempo de 5 segundos.
    temporizador(5000)
        .then((mensaje) => {
            //Escribimos el resultado en el elemento p.
            resultado.textContent = mensaje;

            //Eliminamos el botón una vez obtenido un resolve.
            document.getElementById("abortar").remove();
        })
        .catch((error) => {
            throw Error("Error:" + error);
        });
    
    //Añadimos el resultado al body.
    document.body.appendChild(resultado);
}

//Esta función recibe un tiempo en milisegundos para resolver una promesa una vez pasado el tiempo.
function temporizador(tiempo){
    //Se devolverá un objeto Promise con el valor que corresponda mediante resolve.
    return new Promise((resolve, reject) => {
        //Creamos un setTimeout() que esperará el tiempo obtenido por parámetro, luego devolverá la promesa con el valor de resolve.
        let timeOut = setTimeout(() => {
            //Concluimos la promesa con el mensaje oportuno.
            resolve("Tiempo concluido.");
        }, tiempo);

        //Obtenemos el botón del documento por su id.
        let botonAbortar = document.getElementById("abortar");
        //Le asignamos un evento click para que si se pulsa antes de pasar el tiempo detenga el setTimeout() y devuelva la promesa con otro valor para resolve. 
        botonAbortar.addEventListener("click", function(){
            //Detenemos el setTimeout().
            clearTimeout(timeOut);

            //Concluimos la promesa con el mensaje de interrupción.
            resolve("Acción interrumpida por el usuario.")
        });
    });
}

