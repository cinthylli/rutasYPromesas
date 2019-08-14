/*
Taller Node
1. Crear un JSON que contenga información de 4 compañeros del salón. Información
como nombre, apellido, gustos, ocio, una descripción de la persona, etc. Este JSON
debe tener mínimo 7 propiedades.
Crear una página index.html que contenga 4 enlaces de redirección hacia la página de
cada una de las personas del JSON. Para lograr esto deben usar el módulo path para
manejar las rutas y usar interpolación para llenar los datos, similar a lo visto ayer en
clase. Debe existir una página para cada persona.
Las cinco páginas que debemos crear deben tener buenos estilos CSS.
Los compañeros deben ser personas con las cuales no hemos compartido en el salón,
esto con el fin de unir aún más nuestro curso

*/


const http = require("http")
fs = require('fs')
path = require('path')

var nombre 
var apellido
var pasatiempo
var profesion
var estadocivil
var estatura
var descripcion
var cabello


var companeros = {
"companero1" : {
    "nombre" : "rocio",
    "apellido" : "grajales",
    "pasatiempo" : "caminar",
    "profesion" : "ingeniera quimica",
    "estadocivil" : "casada",
    "estatura" : 1.50,
    "descripcion" : "estudiand fulllstack en bictia que nacio en medellin",
    "cabello" : "cafe"
},

"companero2" : {
    "nombre" : "Geraldine",
    "apellido" : "Romero",
    "pasatiempo" : "leer",
    "profesion" : "estudiante de fullstack",
    "estadocivil" : "soltera",
    "estatura" : 1.54,
    "descripcion" : "Mujer linda alegre, armoniosa cuando no le sacan la piedra",
    "cabello" : "castano"
},
"companero3" : {
    "nombre" : "Juan (Jesus)",
    "apellido" : "Beltran",
    "pasatiempo" : "orar a Dios",
    "profesion" : "estudiante fullstack",
    "estadocivil" : "soltero",
    "estatura" : 1.65,
    "descripcion" : "estudiand fulllstack soldado de cristo",
    "cabello" : "rasta"
},
"companero4" : {
    "nombre" : "Daniel",
    "apellido" : "Shecina",
    "pasatiempo" : "Programar",
    "profesion" : "ingeniera de sistemas",
    "estadocivil" : "soltero",
    "estatura" : 1.80,
    "descripcion" : "estudiand fulllstack apasionado por github",
    "cabello" : "negro"
}

}

function rutero()
{
    x = "rocio"
    return x
}

http.createServer((request,response) => {  


//let ruteo = path.basename(request.url)
//let ruteo = rutero()

    if (ruteo == '') 
    {
        fs.readFile('../index.html', (error, dato) => {
            let htmlTexto = dato.toString()
            let validacionInterpolacion = htmlTexto.match(/[^\{\}]+(?=\})/g)
            texto3= "Jose "
          
            for (let i = validacionInterpolacion.length - 1; i >= 0; i--) {
                console.log(i)
                console.log(validacionInterpolacion[i])
                let valor = eval(validacionInterpolacion[i])
                console.log(valor)
                htmlTexto = htmlTexto.replace("{" + validacionInterpolacion[i] + "}", valor)
            }
            response.writeHead(200, { 'Content-type': 'text/html' })
            response.end(htmlTexto)
        })
    }
     else if(ruteo=='geraldine')
     {
        fs.readFile('../geraldine.html', (error, dato) => {
            let htmlTexto = dato.toString()
            let validacionInterpolacion = htmlTexto.match(/[^\{\}]+(?=\})/g)
            nombre = companeros.companero2.nombre
            apellido = companeros.companero2.apellido
            pasatiempo = companeros.companero2.pasatiempo
            profesion = companeros.companero2.profesion
            estadocivil = companeros.companero2.estadocivil
            estatura = companeros.companero2.estatura
            descripcion = companeros.companero2.descripcion
            cabello = companeros.companero2.cabello
            for (let i = validacionInterpolacion.length - 1; i >= 0; i--) {
                console.log(i)
                console.log(validacionInterpolacion[i])
                let valor = eval(validacionInterpolacion[i])
                console.log(valor)
                htmlTexto = htmlTexto.replace("{" + validacionInterpolacion[i] + "}", valor)
            }
            response.writeHead(200, { 'Content-type': 'text/html' })
            response.end(htmlTexto)
        })
     }

     else if(ruteo=='rocio')
     {
        fs.readFile('../rocio.html', (error, dato) => {
            let htmlTexto = dato.toString()
            let validacionInterpolacion = htmlTexto.match(/[^\{\}]+(?=\})/g)
            texto4 = "ud se esta levantando"
            for (let i = validacionInterpolacion.length - 1; i >= 0; i--) {
                console.log(i)
                console.log(validacionInterpolacion[i])
                let valor = eval(validacionInterpolacion[i])
                console.log(valor)
                htmlTexto = htmlTexto.replace("{" + validacionInterpolacion[i] + "}", valor)
            }
            response.writeHead(200, { 'Content-type': 'text/html' })
            response.end(htmlTexto)
        })
     }


     else if(ruteo=='juan')
     {
        fs.readFile('../juan.html', (error, dato) => {
            let htmlTexto = dato.toString()
            let validacionInterpolacion = htmlTexto.match(/[^\{\}]+(?=\})/g)
            var texto3 = "aqui va lo que quieras ponerle"
            for (let i = validacionInterpolacion.length - 1; i >= 0; i--) {
                console.log(i)
                console.log(validacionInterpolacion[i])
                let valor = eval(validacionInterpolacion[i])
                console.log(valor)
                htmlTexto = htmlTexto.replace("{" + validacionInterpolacion[i] + "}", valor)
            }
            response.writeHead(200, { 'Content-type': 'text/html' })
            response.end(htmlTexto)
        })
     }


     else if(ruteo=='daniel')
     {
        fs.readFile('../daniel.html', (error, dato) => {
            let htmlTexto = dato.toString()
            let validacionInterpolacion = htmlTexto.match(/[^\{\}]+(?=\})/g)
            rojoback= "<style> body{ background-color : blue } </style>"
           var texto1 = "se despierta"
            for (let i = validacionInterpolacion.length - 1; i >= 0; i--) {
                console.log(i)
                console.log(validacionInterpolacion[i])
                let valor = eval(validacionInterpolacion[i])
                console.log(valor)
                htmlTexto = htmlTexto.replace("{" + validacionInterpolacion[i] + "}", valor)
            }
            response.writeHead(200, { 'Content-type': 'text/html' })
            response.end(htmlTexto)
        })
     }

}).listen(3000)

function despertador(resolver, estadoreloj) {
    if (estadoreloj == "encendido") {
        return resolver()
    } else {
        return rechazar()

    }

}

function transmilenio() {

    y = "no hay paro"
    return y

}

function llegar() {

    a = "llegotarde"
    return a

}

function tomarsopa() {

    b = "hayunpelo"
    return b

}

new Promise((resolver, rechazar) => {
    console.log('Inicial');
    ruteo = "daniel"
    despertador(resolver, "encendido");
})
    .then((apodresolver) => {
        console.log('ud  esta despierto y listo para salir por que el reloj esta encendido');

        var x = transmilenio()
        console.log(x)
        if (x == "hay paro") {
            console.log("juemadre hay paro")
            rechazar()
        }

    }).then((apodresolver2) => {

        console.log('bien ahora puede abordar trasmilenio por que no hay paro');

        var tiempo = llegar()
        if (tiempo == "llegotemprano") {
            console.log("no puede entrar a clase por que llegue tarde")
            rechazar()
        }
    }).then((apodresolver2) => {

        console.log('ahora puede entrar a estudiar');
        comida = tomarsopa()

        if (comida == "nohayunpelo") {
            console.log("mk gas hay un pelo en la sopa")
            rechazar()
        }


    }).then((apodresolver2) => {

        console.log(' almuerza');
    }).then((apodresolver2) => {

        console.log(' va a trabajar a beletrix');
    }).then((apodresolver2) => {

        console.log(' sale a relajarse con sus companeros de trabajo');
    }).then((apodresolver2) => {

        console.log(' vuelve a casa');
    }).then((apodresolver2) => {

        console.log('se acuesta para ver netflix');
    })
    .catch(() => {
        console.log("entro al catch");
    })
