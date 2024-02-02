function iniciaListener(){
    //Se inicia el evento keydown que obtiene los valores de las teclas que se pulsan.
    document.addEventListener("keydown", function(ev){

        //Si las teclas pulsadas son alt y F12:
        if(ev.altKey && ev.key == "F12"){
            //Asignamos la imagen de fondo al body.
            document.body.style.backgroundImage = 'url("./imagenes/background.jpg")';
            
            //Le damos las proporciones adecuadas.
            document.body.style.backgroundSize = '100% 110%';
            
            //Le indicamos que no repita la imagen si sobra espacio.
            document.body.style.backgroundRepeat = 'no-repeat';
        }
    });
}