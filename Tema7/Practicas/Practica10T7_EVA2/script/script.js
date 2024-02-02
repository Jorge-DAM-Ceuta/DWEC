function iniciaListener(){
    //Cuando se ha cargado el documento se inicia el evento donde se obtienen las propiedades del div para usarlas en otro evento mousemove.
    document.addEventListener("DOMContentLoaded", function(){
        //Obtenemos el div.
        let cartel = document.querySelector("div");

        //Obtenemos la mitad del ancho y la mitad del alto del cartel para centrarlo en el puntero.
        let mitadAncho = cartel.clientWidth / 2;
        let mitadAlto = cartel.clientHeight / 2;

        //Agregamos un evento mousemove al documento para obtener las coordenadas del puntero.
        document.addEventListener("mousemove", function(ev){
            let coordenadas = document.querySelector("p");
            coordenadas.textContent = `X: ${ev.clientX}, Y: ${ev.clientY}`;

            //Calculamos las posiciones para centrar el cartel respecto a las coordenadas del puntero.
            let marginLeft = ev.clientX - mitadAncho;
            let marginTop = ev.clientY - mitadAlto;

            // Aplicamos las nuevas posiciones al cartel
            cartel.style.left = `${marginLeft}px`;
            cartel.style.top = `${marginTop}px`;
        });
    });
}