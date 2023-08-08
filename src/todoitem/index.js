import { CompleteIcon } from '../TodoIcon/CompleteIcon.js'
import { DeleteIcon } from '../TodoIcon/DeleteIcon.js'
import "./todoitem.css"

function TodoItems (props) {
    return (
        <li className="TodoItem">
           
           <CompleteIcon 
             completed={props.completed}
             onComplete ={props.onComplete}
            />
            
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
            <DeleteIcon
            onDelete = {props.onDelete}
             />
            
            
        </li>       
    )
}
export { TodoItems };

