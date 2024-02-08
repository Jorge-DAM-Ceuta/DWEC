function permiteCookie(){
    // Se setea la cookie a true con visitas a 1
    document.cookie = "visitas=1; max-age=" + (60*60*24*365) + "; path=/;";
    
    // Se oculta el panel de las cookies y se muestra el resultado y el botón de cerrar sesión
    document.getElementById("panelCookies").setAttribute("hidden", "");
    document.getElementById("resultado").removeAttribute("hidden");

    let numeroVisitas = getCookieValue("visitas");
    let muestraVisitas = document.getElementById("numeroVisitas");

    // Se muestra el valor de la cookie en consola.
    console.log(numeroVisitas);

    // Se escribe el valor en el contador del resultado.
    muestraVisitas.textContent = numeroVisitas;
}

function getCookieValue(nombre){
    let cookies = document.cookie.split(";"); 

    for(let i = 0; i < cookies.length; i++){

        let cookie = cookies[i].trim(); 

        if(cookie.startsWith(nombre + "=")){
            let valor = cookie.substring(nombre.length + 1);
            return valor;
        }
    }

    return null; 
}

function rechazaCookie(){
    //Se oculta el panel de las cookies y se muestra el contenido.
    document.getElementById("panelCookies").setAttribute("hidden", "");
    document.getElementById("resultado").removeAttribute("hidden");

    //Se añade un mensaje en el contador.
    let muestraVisitas = document.getElementById("numeroVisitas");
    muestraVisitas.textContent = "No has aceptado las cookies";
}

function reestablecer(){
    // Se oculta el panel de las cookies
    document.getElementById("panelCookies").removeAttribute("hidden");
    document.getElementById("resultado").setAttribute("hidden", "");
}

function aumentarContadorVisitas(){
    // Obtenemos el valor de la cookie.
    let valorCookie = getCookieValue("visitas");
    let contador = document.getElementById("numeroVisitas");
 
    // Si la cookie existe y su valor es mayor que 0 y distinto de null se obtiene su valor y se le incrementa.
    if(valorCookie != null && parseInt(valorCookie) > 0){
        let nuevoValor = parseInt(valorCookie) + 1;
       
        // Se actualiza la cookie con el nuevo valor.
        document.cookie = "visitas=" + nuevoValor + "; path=/;";
        contador.textContent = nuevoValor;
    }
 }
 

function iniciaListeners(){
    // Agregamos eventos a los botones
    document.getElementById("botonPermite").addEventListener("click", permiteCookie);
    document.getElementById("botonRechaza").addEventListener("click", rechazaCookie);
    document.getElementById("botonCierraSesion").addEventListener("click", reestablecer);

    if(parseInt(getCookieValue("visitas")) > 0){
        // Ya no se muestra el panel de las cookies y se muestra el resultado.
        document.getElementById("panelCookies").setAttribute("hidden", "");
        document.getElementById("resultado").removeAttribute("hidden");

        // Se le suma a uno la cantidad de visitas.
        aumentarContadorVisitas();
    }
}