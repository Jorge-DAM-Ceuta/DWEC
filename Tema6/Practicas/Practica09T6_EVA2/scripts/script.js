function permiteCookie() {
    // Se setea la cookie a true con visitas a 1
    document.cookie = "permiteCookie=true; max-age=60*60*24*365";
    document.cookie = "visitas=1; max-age=60*60*24*365";

    //Se oculta el panel de las cookies y se muestra el resultado y el botón de cerrar sesión
    document.getElementById("panelCookies").setAttribute("hidden", "");
    document.getElementById("resultado").removeAttribute("hidden");

    let numeroVisitas = document.getElementById("numeroVisitas");
    let cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();

        if (cookie.indexOf("visitas=") === 0) {
            // Obtienes el valor de la cookie "visitas"
            let valorVisitas = cookie.substring("visitas=".length);
            numeroVisitas.textContent = valorVisitas;
        }
    }
}

function rechazaCookie() {
    // Se setea la cookie a false
    document.cookie = "permiteCookie=false";

    // Se oculta el panel de las cookies y el resultado
    document.getElementById("panelCookies").setAttribute("hidden", "");
    document.getElementById("resultado").setAttribute("hidden", "");
}

function reestablecer() {
    // Se setea la cookie a false
    document.cookie = "permiteCookie=false";
    
    // Se oculta el panel de las cookies
    document.getElementById("panelCookies").removeAttribute("hidden");
    document.getElementById("resultado").setAttribute("hidden", "");
}

function iniciaListeners(){
    // Agregamos eventos a los botones
    document.getElementById("botonPermite").addEventListener("click", permiteCookie);
    document.getElementById("botonRechaza").addEventListener("click", rechazaCookie);
    document.getElementById("botonCierraSesion").addEventListener("click", reestablecer);
}