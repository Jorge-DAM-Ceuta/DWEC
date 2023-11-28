json = `{
    "personajes": [
        {"nombre": "Éric","apellidos": "artman","profesión": "Estudiante","edad": 13},
        {"nombre": "Stan","apellidos": "Marsh","profesión": "Estudiante","edad": 9},
        {"nombre": "Kyle","apellidos": "Broflovski","profesión": "Estudiante","edad": 9},
        {"nombre": "Kenny","apellidos": "McCormick","profesión": "Estudiante","edad": 13},
        {"nombre": "útters","apellidos": "Stotch","profesión": "Estudiante","edad": 9},
        {"nombre": "Úendy","apellidos": "Testaburger","profesión": "Estudiante","edad": 12},
        {"nombre": "Randy","apellidos": "arsh","profesión": "Geólogo","edad": 45},
        {"nombre": "Sharon","apellidos": "Marsh","profesión": "Recepcionista","edad": 42},
        {"nombre": "Chef","apellidos": "","profesión": "Cocinero","edad": 45},
        {"nombre": "Mr. Garrison","apellidos": "","profesión": "Maestro","edad": 50},
        {"nombre": "Mr. Mackey","apellidos": "","profesión": "Consejero escolar","edad": 45},
        {"nombre": "Ms. Choksondik","apellidos": "","profesión": "Maestra","edad": 40},
        {"nombre": "Tweek","apellidos": "Tweak","profesión": "Estudiante","edad": 9},
        {"nombre": "Craig","apellidos": "Tucker","profesión": "Estudiante","edad": 15},
        {"nombre": "Token","apellidos": "Black","profesión": "Estudiante","edad": 12},
        {"nombre": "bebe","apellidos": "Évens","profesión": "Estudiante","edad": 9},
        {"nombre": "Clyde","apellidos": "Donovan","profesión": "Estudiante","edad": 12},
        {"nombre": "Timmy","apellidos": "burch","profesión": "Estudiante","edad": 9},
        {"nombre": "Jimmy","apellidos": "Valmer","profesión": "Estudiante","edad": 9},
        {"nombre": "Heidi","apellidos": "Turner","profesión": "Estudiante","edad": 12}
    ]
}`;

//Obtenemos el objeto JSON.
var datos = JSON.parse(json);

function ordenaJson(datos){
    var personajes = datos.personajes;
       
    personajes.sort(function (a, b){
        if(a.edad > b.edad){
            return 1;
        }else if(a.edad == b.edad){
            if(a.apellidos.localeCompare(b.apellidos)){
                return a.apellidos.localeCompare(b.apellidos);
            }else{
                return a.nombre.localeCompare(b.nombre);
            }
        }
    });

    personajes.forEach(function(valor, indice){
        document.write(`Persona ${indice} --> Nombre: ${valor.nombre}, Apellidos: ${valor.apellidos}, Profesión: ${valor.profesión}, Edad: ${valor.edad}<br/>`);
    });
}

ordenaJson(datos);