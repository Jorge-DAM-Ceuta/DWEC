<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    //Si se ha recogido algo, lo asignamosm a sus variables, en otro caso asignamos la cadena vacía.
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $passwd = isset($_POST['passwd']) ? $_POST['passwd'] : '';
    
    // Verificar lo recibido
    if (($email === "nathan.Explosion@deth.klok.die" || $email === "usuario.01@deth-klok.die" || $email === "usuario.02@deth-klok.die" || $email === "usuario.03@deth-klok.die") && $passwd === "000000"){
        // Crear un array asociativo con los datos
        $datos = array(
            "email" => $email,
            "nombre" => "User666!",
            "apellidos" => "Hijo de Arathorn",
            "dni" => "44555666Z",
            "rol" => "Usuario"
        );

        // Convertimos el array a formato JSON
        $json_data = json_encode($datos);

        // Enviamos el JSON como respuesta
        //El header puede que no haga falta
        header('Content-Type: application/json');
        echo $json_data;
    }else if(($email === "Will-murder_f1c2@dethklok-band.die" || $email === "admin@deth-klok.die") && $passwd === "000000"){
        // Crear un array asociativo con los datos
        $datos = array(
            "email" => $email,
            "nombre" => "D1eAdmin!",
            "apellidos" => "Murder",
            "dni" => "55666777J",
            "rol" => "Administrador"
        );

        // Convertimos el array a formato JSON
        $json_data = json_encode($datos);

        // Enviamos el JSON como respuesta
        //El header puede que no haga falta
        header('Content-Type: application/json');
        echo $json_data;
    }else{
        // Crear un array asociativo con los datos
        $datos = array(
            "email" => $email,
            "nombre" => "Invitado!",
            "apellidos" => "Murder",
            "dni" => "55666777J",
            "rol" => "Invitado"
        );

        // Convertimos el array a formato JSON
        $json_data = json_encode($datos);

        // Enviamos el JSON como respuesta
        //El header puede que no haga falta
        header('Content-Type: application/json');
        echo $json_data;
    }
} else {
    // Enviar mensaje de error si no es una solicitud POST
    echo "Error en PHP: Método de solicitud no válido.";
}

?>