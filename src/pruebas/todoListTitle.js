import './todolist.css'

function TodoListTitles({children}){
 return (
        <ul className=' TodoList'>
        
            {children} 
        </ul>
    )


}

export{TodoListTitles}