import "./createtodobutton.css"

function CreateTodoButton () {
    return (
        <button 
        className="CreateTodoButton"
        onClick={ 
            (event) => {
                console.log("de diste click")
                console.log(event)
                console.log(event.target)
            }
        }
    >+</button>
    )
}

export { CreateTodoButton }