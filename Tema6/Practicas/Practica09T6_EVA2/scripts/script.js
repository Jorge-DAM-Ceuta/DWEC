function permiteCookie() {
    // Se setea la cookie a true con visitas a 1
    document.cookie = `permiteCookie=true; visitas=1; max-age=${60 * 60 * 24 * 365};`;
    
    //Se oculta el panel de las cookies
    document.getElementById("panelCookies").classList.add("hidden");

    // Mostramos las visitas y el botón para cerrar sesión
    muestraVisitas();
    mostrarCerrarSesion();
}

function rechazaCookie() {
    // Se setea la cookie a false
    document.cookie = `permiteCookie=false; visitas=0; max-age=${60 * 60 * 24 * 365};`;

    // Se oculta el panel de las cookies
    document.getElementById("panelCookies").classList.add("hidden");

    // Asignamos el valor oportuno en el método muestraVisitas().
    muestraVisitas();
}

function mostrarCerrarSesion() {
    let botonCierraSesion = document.createElement("button");
    botonCierraSesion.textContent = "Cerrar sesión";
    botonCierraSesion.id = "botonCierraSesion";

    // Se añade el botón al documento
    document.body.appendChild(botonCierraSesion);

    // Se agrega el evento de clic al nuevo botón que setea la cookie a false y muestra el panel de las cookies
    botonCierraSesion.addEventListener("click", function(){
        setCookie("permiteCookie", "false");
        document.getElementById("panelCookies").classList.remove("hidden");
    });
}

function muestraVisitas() {
    let cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
    
        if (cookie.indexOf("visitas=") == 0) {
            // Obtienes el valor de la cookie "visitas"
            let valorVisitas = cookie.substring("visitas=".length);
            console.log(`El valor actual de la cookie "visitas" es: ${valorVisitas}`);
        }
    }
}

function iniciaListeners(){
    // Agregamos eventos a los botones
    document.getElementById("botonPermite").addEventListener("click", permiteCookie);
    document.getElementById("botonRechaza").addEventListener("click", rechazaCookie);
}