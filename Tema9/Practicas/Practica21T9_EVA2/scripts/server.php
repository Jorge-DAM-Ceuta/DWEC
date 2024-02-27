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

    if(isset($_GET["peticion"]) && isset($_GET["peticion"]["email"]) && isset($_GET["peticion"]["password"])){
        $roleUsuarioEncontrado = "";

        foreach($usuarios as $usuario){
            if(($usuario["email"] == $_GET["peticion"]["email"]) && ($usuario["password"] == $_GET["password"])){
                $roleUsuarioEncontrado = $usuario["role"];
            }
        }

        if($roleUsuarioEncontrado != ""){
            echo $roleUsuarioEncontrado;
        }else{
            echo "Usuario no reconocido";
        }
    }
?>

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


    if(isset($_GET["peticion"]) && isset($_GET["peticion"]["email"]) && isset($_GET["peticion"]["password"])){
        $roleUsuarioEncontrado = "";

        foreach($usuarios as $usuario){
            echo $usuario;
            
            if(($usuario["email"] == "jorgemugar12@hotmail.com") && ($usuario["password"] == "000000")){
                $roleUsuarioEncontrado = "Administrador";
            }
        }

        if($roleUsuarioEncontrado != ""){
            echo $roleUsuarioEncontrado;
        }else{
            echo "Usuario no reconocido";
        }
    }
?>