function iniciaListener(){
    let textarea = document.querySelector("textarea");
    let boton = document.querySelector("button");

    textarea.addEventListener('scroll', function (){
        //Si la posición de scroll actual del textarea es igual a la diferencia entre la altura total del textarea y la altura visible:
        if(textarea.scrollTop == (textarea.scrollHeight - textarea.clientHeight)){
            //Se muestra el botón
            boton.removeAttribute("hidden");

            //Se añade el listener click al botón para hacer desaparecer ambos elementos.
            boton.addEventListener("click", function(){
                textarea.setAttribute("hidden", "");
                boton.setAttribute("hidden", "");
            });
        }else{
            //Si no es el caso se sigue añadiendo el atributo hidden al botón, por si se vuelve a subir el scroll.
            boton.setAttribute("hidden", "");
        }
    });
}