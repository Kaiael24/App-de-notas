const fs = require("fs")
const process = require("process")
const leerCambiarJson = JSON.parse(fs.readFileSync("./tareas.json", "utf-8"))

let consola= process.argv[2] && process.argv[2].toLowerCase()

switch(consola){
    case "listar":
        console.log("*******************************")
        leerCambiarJson.forEach(elementArray => {
            console.log(`Titulo:${elementArray.titulo}\nEstado:${elementArray.estado}`)
            console.log("*******************************")
        });
        break;
    case undefined:
        console.log("***************************************")
        console.log("Atención - Tienes que pasar una acción.")
        console.log("***************************************")
        break;
    default:
        console.log("******************************")
        console.log("No entiendo que quieres hacer.")
        console.log("******************************")
}




