/* const fs = require("fs") */
const tareas = require("./tareas")
const process = require("process")

let consola= process.argv[2] && process.argv[2].toLowerCase()
switch(consola){
    case "listar":
        console.log("*******************************")
        tareas.leerJson().forEach(elementArray => {
            console.log(`Titulo:${elementArray.titulo}\nEstado:${elementArray.estado}`)
            console.log("*******************************")
        });
        break;
    case "crear":
        let titulo1 = process.argv[3]
        let estado2 = process.argv[4]
        console.log("***************************************")
        console.log("Se agrego nueva tarea en archivo Json.")
        console.log("***************************************")
        tareas.crearTarea(titulo1,estado2)
        
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




