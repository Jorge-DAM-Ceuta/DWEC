<?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        // Si se ha recogido algo, lo asignamos a sus variables, en otro caso asignamos la cadena vacía.
        $email = isset($_POST['email']) ? $_POST['email'] : '';
        $password = isset($_POST['password']) ? $_POST['password'] : '';
        
        // Verificar datos para cuenta de Administrador.
        if($email === "admin@cifpceuta.es" && $password === "@Abc123"){
            // Crear un array asociativo con los datos.
            $datos = array(
                "email" => $email,
                "password" => $password,
                "nombre" => "CIFP",
                "apellidos" => "Ceuta",
                "dni" => "44555666Z",
                "rol" => "Administrador"
            );

            // Convertimos el array a formato JSON.
            $json_data = json_encode($datos);

            // Enviamos el JSON como respuesta.
            header('Content-Type: application/json');
            echo $json_data;

        // Verificar datos para cuenta de Usuario.
        }else if($email === "10113@cifpceuta.es" && $password === "@Abc123"){
            // Crear un array asociativo con los datos.
            $datos = array(
                "email" => $email,
                "password" => $password,
                "nombre" => "Jorge",
                "apellidos" => "Muñoz García",
                "dni" => "55666777J",
                "rol" => "Usuario"
            );

            // Convertimos el array a formato JSON.
            $json_data = json_encode($datos);

            // Enviamos el JSON como respuesta.
            header('Content-Type: application/json');
            echo $json_data;

        // Si no es ni Administrador ni Usuario se crea un array específico con rol "invitado". 
        }else{
            // Crear un array asociativo con los datos.
            $datos = array(
                "email" => $email,
                "password" => $password,
                "nombre" => "Invitado",
                "apellidos" => "Invitado",
                "dni" => "55663456D",
                "rol" => "Invitado"
            );

            // Convertimos el array a formato JSON.
            $json_data = json_encode($datos);

            // Enviamos el JSON como respuesta.
            header('Content-Type: application/json');
            echo $json_data;
        }
    }else{
        // Enviar mensaje de error si no es una solicitud POST.
        echo "Error en PHP: Método de solicitud no válido.";
    }
?>