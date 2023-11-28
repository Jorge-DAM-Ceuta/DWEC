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

function muestraPersonajes(datos){
    var personajes = datos.personajes;
       
    //Obtener solo los personajes que sean estudiantes.
    var estudiantes = personajes.map(function(valor){
        if(valor.profesión == "Estudiante"){
            return valor;
        }
    });

    //Obtener la suma de las edades y el total de estudiantes en el array.
    var totalEstudiantes = 0;
    var sumaEdades = 0;
    
    for(objeto of estudiantes){
        if(typeof(objeto) != "undefined"){
            sumaEdades += objeto.edad;
            totalEstudiantes++;
        } 
    }

    console.log("Media edades: " + sumaEdades / totalEstudiantes);

    // sumaEdades = estudiantes.reduce(function(anterior, actual){
    //     return anterior.edad + actual.edad;
    // }, 0);
    
    //Añadir Mr. a todos los nombres
    for(objeto of estudiantes){
        if(typeof(objeto) != "undefined"){
            objeto.nombre = "Mr. " + objeto.nombre;
        } 
    }

    //Mostrar los datos en una tabla
    document.write("<table border='1'>");
    document.write("<tr><th>Nombre</th><th>Apellidos</th><th>Profesión</th><th>Edad</th></tr>");

    for(objeto of estudiantes){
        if(typeof(objeto) != "undefined"){
            document.write(`<tr><td>${objeto.nombre}</td><td>${objeto.apellidos}</td><td>${objeto.profesión}</td><td>${objeto.edad}</td></tr>`);
        } 
    }

    document.write("</table>");
}

muestraPersonajes(datos);