function iniciaListener(){
    //Se obtiene el elemento div que se usa como capa.
    let capa = document.querySelector("div");

    //Se asigna un evento mouseenter para que al entrar en contacto con el puntero cambie su color a verde.
    capa.addEventListener("mouseenter", function(){
        capa.style.backgroundColor = 'green';
    });

    //Se asigna un evento mouseleave para que al perder el contacto con el puntero cambie su color a blanco de nuevo.
    capa.addEventListener("mouseleave", function(){
        capa.style.backgroundColor = 'white';
    });

    //Se asigna el evento contextmenu para anular su comportamiento por defecto con preventDefault. 
    capa.addEventListener('contextmenu', function(ev){
        ev.preventDefault();
    });

    //Se asigna un evento mousedown para controlar cuando se pulsa un botón del ratón.
    capa.addEventListener('mousedown', function(ev){
        //Si el botón es el izquierdo se cambia el color a rojo, si es el derecho se cambia a azul.
        if(ev.button == 0){
            capa.style.backgroundColor = 'red';
        }else if(ev.button == 2){
            capa.style.backgroundColor = 'blue';
        }
    });
    
    //Se asigna un evento mouseup para controlar cuando deja de pulsarse el botón del ratón.
    capa.addEventListener('mouseup', function(ev){
        //Si el botón que deja de pulsarse es el izquierdo o el derecho se vuelve al color que tenía la capa.
        if(ev.button == 0 || ev.button == 2){
            capa.style.backgroundColor = 'green';
        }
    });
}