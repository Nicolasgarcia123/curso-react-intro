import "./todocounter.css"

function TodoCounter({total, completed}){
    if (total > completed){
        return (
            <h1 className="TodoCounter">
            Has resuelto <span>{completed}</span> de <span>{total}</span> todo
            </h1>
        )}
    else { return (
        <h1 className="TodoCounter">
        Felicitaciones! No tienes tareas pendientes
        </h1>)}
    }

export{TodoCounter} 