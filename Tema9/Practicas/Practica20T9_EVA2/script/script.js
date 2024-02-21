export function crearFormulario(){
    //Obtenemos los datos del json de la url que contiene los datos.
    fetch("http://jsonplaceholder.typicode.com/posts")
        //El primer then devuelve el contenido en formato json con la función json().
        .then(respuesta => respuesta.json())

        //El segundo then recoge este objeto JSON.
        .then(datosJSON => {
            //Obtenemos el array datos que contiene objetos con los datos.
            let datos = datosJSON;

            //Declaramos un contador para enumerar los datos.
            let contador = 1;

            //Recorremos cada objeto que hay en el array datos del JSON.
            for(let objeto of datos){
                //Creamos un elemento form por cada objeto por si hubiese más registros.
                let formulario = document.createElement("form");
                
                //Creamos un h2 con el texto identificador.
                let titulo = document.createElement("h1");
                titulo.textContent = `Registro nº ${contador}`;

                //Añadimos el titulo al formulario y aumentamos el contador.
                formulario.appendChild(titulo);
                contador++;
                
                //Ahora recorremos cada propiedad del objeto actual del array datos del JSON.
                for(let nombre in objeto){
                    //Creamos un elemento label con el nombre de la propiedad.
                    let label = document.createElement("label");
                    label.textContent = nombre + ": ";

                    //Creamos un elemento input.
                    let input = document.createElement("input");

                    //Se añade el atributo name con el nombre de la propiedad.
                    input.setAttribute("name", nombre);
                    //Se añade el atributo value con el valor de la propiedad.
                    input.setAttribute("value", objeto[nombre]);

                    //Añadimos el input al label.
                    label.appendChild(input);
                    //Añadimos el label con el input al formulario.
                    formulario.appendChild(label);

                    //Creamos y añadimos un elemento p para separar cada label e input del siguiente.
                    let separacion = document.createElement("p");
                    formulario.appendChild(separacion);
                }
                
                //Se añade el formulario al body.
                document.body.appendChild(formulario);
            }
        })

        //Si hay algun error o excepción se lanza un nuevo error.
        .catch(error => {
            throw new Error(error);
        });
}
