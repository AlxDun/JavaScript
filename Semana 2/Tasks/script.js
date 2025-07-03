const getstatus = (status) => {
    switch (status){
        case "toDo": return "Pendiente";
        case "inProgress": return "en progreso";
        case "done": return "Completada";
        default: return "Desconocido"
    }
}