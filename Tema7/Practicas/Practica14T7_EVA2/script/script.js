function iniciaListener(){
    //Obtenemos las cajas y el item.
    let cajas = document.querySelectorAll(".caja");
    let item = document.getElementById("item");

    //Por cada caja mediante un for of asignamos los 
    for(let caja of cajas){

        //El evento dragover se activa cuando estamos posicionando el item en su interior.
        caja.addEventListener("dragover", function(ev){
            //Prevenimos el comportamiento por defecto para que permita obtener el elemento al soltarlo.
            ev.preventDefault();

            //Ocultamos el elemento mientras se arrastra.
            item.setAttribute("hidden", "");

            //Se le aplica un borde de líneas discontinuas.
            caja.style.border = "2px dashed red";

            //Se muestra un mensaje de evento activado.
            console.log("Evento activado: dragover");
        });

        //El evento dragoleave se activa cuando deja de posicionarse el item en su interior.
        document.addEventListener("dragleave", function(){
            item.removeAttribute("hidden");
            //Se le aplica el borde por defecto a la caja.
            caja.style.border = "2px solid black";
    
            //Se muestra un mensaje de evento activado.
            console.log("Evento activado: dragleave");
        });

        //El evento drop se activa cuando se suelta un elemento en su interior.
        caja.addEventListener("drop", function(){
            //Se muestra de nuevo el elemento.
            item.removeAttribute("hidden");

            //Se añade el elemento a la caja en cuestión.
            caja.appendChild(item);

            //Se le aplica el borde por defecto a la caja.
            caja.style.border = "2px solid black";

            //Se muestra el mensaje por consola.
            console.log("¡Me has soltado!");
        });
    }

    //Añadiendo un evento dragover al document conseguimos ocultar el elemento de su posición si no se está llevando a otra caja.
    document.addEventListener("dragover", function(){
        //Se oculta el elemento.
        item.setAttribute("hidden", "");

        //Se muestra el mensaje por consola.
        console.log("¡Meneo en el body!");
    });

    
}