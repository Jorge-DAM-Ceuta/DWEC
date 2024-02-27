<?php
    $usuarios = array(
        array(
            "email" => "jorgemugar12@hotmail.com",
            "password" => "000000",
            "role" => "Administrador"
        ),
        array(
            "email" => "10113@cifpceuta.es",
            "password" => "000000",
            "role" => "Usuario_estandar"
        ),
        array(
            "email" => "secretaria@cifpceuta.es",
            "password" => "000000",
            "role" => "Usuario_no_reconocido"
        )
    );


    if(isset($_GET["email"]) && isset($_GET["password"])){ 
        // Creamos un array para almacenar la información del usuario.
        $usuarioEncontrado = array();

        // Recorremos la matriz de usuarios.
        foreach($usuarios as $usuario){

            // Si se ha encontrado el usuario se guarda toda su información en el nuevo array a devolver.
            if(($usuario["email"] == $_GET["email"]) && ($usuario["password"] == $_GET["password"])){
                $usuarioEncontrado = $usuario;
            }
        }

        //Indicamos que se va a indicar un json en formato texto.
        header("Content-Type: application/json");

        // Tanto si es administrador o usuario se devuelve su informacion codificada en json.
        // En caso de no haber encontrado el usuario se crea un array específico para devolverlo también en json.
        if(count($usuarioEncontrado) > 0){
            echo json_encode($usuarioEncontrado, true);
        }else{
            $usuarioNoReconocido = 
            array(
                "email" => $_GET["email"],
                "password" => "",
                "role" => "Usuario_no_reconocido"
            );

            echo json_encode($usuarioNoReconocido, true);
        }
    }else{
        echo "No se han obtenido los datos necesarios correctamente.";
    }
?>