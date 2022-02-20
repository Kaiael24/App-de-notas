/* const fs = require("fs") */
const tareas = require("./tareas")
const process = require("process");
const funcionesJson = require("./tareas");

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
        tareas.crearTarea(titulo1,estado2)
        console.log("***************************************")
        console.log("Se agrego nueva tarea en archivo Json:")
        console.log(`Titulo:${titulo1}\nEstado:Pendiente`)
        console.log("***************************************")
        break;
    case "deshacer":
        funcionesJson.deshacer()
        console.log("______________________")
        console.log("Se elimino una tarea.")
        console.log("**********************")
        break;
    case "filtrar":
        let filtro = process.argv[3]
        let tareaFiltrada = funcionesJson.filtrarPorEstado(filtro)
        console.log("--------------------------------------")
        console.log(`Se filtraron las notas: ${filtro}`)
        tareaFiltrada.forEach((element) => {
            console.log("**************************************")
            console.log(`La nota: ${element.titulo}`)           
        })
        break
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




