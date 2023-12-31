var json = `{
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

function muestraPersonajes(json){
    //Obtenemos el objeto JSON.
    var datos = JSON.parse(json);

    //Solo recogemos el array personajes del json.
    var personajes = datos.personajes;
       
    //Ejercicio 1: Obtener un nuevo array únicamente con los estudiantes.
    var arrayEstudiantes = obtenerEstudiantes(personajes);

    //Ejercicio 2: Obtener la media de las edades.
    mediaEdades(arrayEstudiantes);

    //Ejercicio 3: Añadir Mr. a los nombres.
    modificarNombres(arrayEstudiantes);
    
    //Ejercicio 4: Mostrar los datos en una tabla.
    mostrarPersonajes(arrayEstudiantes);
}

//muestraPersonajes(json);

function obtenerEstudiantes(array){
    /*Con la función map comprobamos si el atributo posicion es estudiante, en ese 
    caso mediante return del valor lo almacenamos en la variable estudiante.*/
    let estudiantes = array.map(function(valor){
        if(valor.profesión == "Estudiante"){
            return valor;
        }
    });

    return estudiantes;
}

function mediaEdades(array){
    let totalEstudiantes = 0;
    let sumaEdades = 0;
    
    /*Recorremos el array de estudiantes y omitimos los valores undefined. 
    Sumamos en una variable todas las edades e incrementamos el total de 
    estudiantes por cada vuelta del bucle.*/
    for(objeto of array){
        if(typeof(objeto) != "undefined"){
            sumaEdades += objeto.edad;
            totalEstudiantes++;
        } 
    }

    //Se almacena la media de las edades. y se muestra por consola.
    let mediaEdades = sumaEdades / totalEstudiantes;

    console.log("Media edades: " + mediaEdades);
}

function modificarNombres(array){
    /*En caso de no ser un valor undefined se sobreescribe el valor
    de la variable nombre por "Mr. " seguido del valor que tenía.*/
    for(objeto of array){
        if(typeof(objeto) != "undefined"){
            objeto.nombre = "Mr. " + objeto.nombre;
        } 
    }
}

function mostrarPersonajes(array){
    /*Mediante document.write() escribimos una tabla con los nombres de los 
    valores en la cabecera y mediante un bucle si el valor no es undefined 
    escribimos una nueva fila y en cada columna su valor correspondiente.*/
    document.write("<table border='1'>");
    document.write("<tr><th>Nombre</th><th>Apellidos</th><th>Profesión</th><th>Edad</th></tr>");

    for(objeto of array){
        if(typeof(objeto) != "undefined"){
            document.write(`<tr><td>${objeto.nombre}</td><td>${objeto.apellidos}</td><td>${objeto.profesión}</td><td>${objeto.edad}</td></tr>`);
        } 
    }

    document.write("</table>");
}