function permiteCookie(){
    // Se setea la cookie a true con visitas a 1
    document.cookie = "permiteCookie=1; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/;";
    
    //Se oculta el panel de las cookies y se muestra el resultado y el botón de cerrar sesión
    document.getElementById("panelCookies").setAttribute("hidden", "");
    document.getElementById("resultado").removeAttribute("hidden");

    let numeroVisitas = getCookieValue("permiteCookie");
    let muestraVisitas = document.getElementById("numeroVisitas");

    console.log(document.cookie);

    muestraVisitas.textContent = numeroVisitas;
    
}

function getCookieValue(nombre){
    let cookies = document.cookie.split(";"); 

    for(let i = 0; i < cookies.length; i++){

        let cookie = cookies[i].trim(); 

        if(cookie.startsWith(nombre + "=")){
            return cookie.substring(nombre.length + 1); 
        }
    }

    return null; 
}

function rechazaCookie(){
    // Se setea la cookie a false
    document.cookie = "permiteCookie=0; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/;";

    // Se oculta el panel de las cookies y el resultado
    document.getElementById("panelCookies").setAttribute("hidden", "");
    document.getElementById("resultado").setAttribute("hidden", "");
}

function reestablecer(){
    // Se setea la cookie a false
    document.cookie = "permiteCookie=0; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/;";
    
    // Se oculta el panel de las cookies
    document.getElementById("panelCookies").removeAttribute("hidden");
    document.getElementById("resultado").setAttribute("hidden", "");
}

function iniciaListeners(){
    // Agregamos eventos a los botones
    document.getElementById("botonPermite").addEventListener("click", permiteCookie);
    document.getElementById("botonRechaza").addEventListener("click", rechazaCookie);
    document.getElementById("botonCierraSesion").addEventListener("click", reestablecer);

    //Si la cookie es true y se carga el documento se suma la cookie visitas en 1.
    //document.addEventListener("DOMContentLoaded", sumarVisita);
}