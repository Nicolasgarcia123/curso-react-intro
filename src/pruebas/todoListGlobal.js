import './todoListGlobal.css'

function TodoListGlobal ({children}) {
    return (
        <ul className='TodoListGlobal'>
        
            {children} 
        </ul>
    )
    
}
export { TodoListGlobal }