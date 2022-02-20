const fs = require("fs")

let funcionesJson = {
        leerJson:()=>{
        return JSON.parse(fs.readFileSync("./tareas.json", "utf-8"))
        }   ,
        crearTarea: (par1, par2)=>{
            let agregando = {
                titulo: par1,
                estado: "pendiente"
            }
            let tareasTotal = funcionesJson.leerJson()
            tareasTotal.push(agregando)
            funcionesJson.escribirJSON(tareasTotal)
            
        },
        escribirJSON: (nuevaTarea)=>{
            let jsonNuevo = JSON.stringify(nuevaTarea)
            fs.writeFileSync("./tareas.json", jsonNuevo, "utf-8")
        },
        deshacer:()=>{
            let paraBorrar = funcionesJson.leerJson()
            paraBorrar.pop()
            funcionesJson.escribirJSON(paraBorrar)
        },
        filtrarPorEstado:function(paraFiltro){
            let tareas = this.leerJson()
            let tareasFiltradas =tareas.filter(tarea => tarea.estado == paraFiltro)
            return tareasFiltradas
        }
}
module.exports = funcionesJson