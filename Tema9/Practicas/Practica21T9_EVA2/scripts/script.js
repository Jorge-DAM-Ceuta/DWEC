export function iniciaListeners(){
    let formulario = document.getElementById("formulario");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    formulario.addEventListener("submit", async function peticionServer(ev){
        try{
            ev.preventDefault();
  
            const peticion = await fetch(formulario.getAttribute("action"), {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    email: email.value,
                    password: password.value
                })
            });
            console.log("BIEN");

            const resultado = await peticion.json();
            console.log(resultado);
    
        }catch(error){
            console.error(error);
        }
    });
}