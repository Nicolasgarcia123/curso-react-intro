import  React  from 'react';
import { AppUI } from './AppUI.js';  
import { useLocalStorage } from './useLocalStorage';
//import {TodoCounter} from '../todocounter/index'
//import { TodoItems } from '../todoitem/index';
//import { TodoSearch } from '../todosearch/index';
//import { CreateTodoButton } from '../createtodobutton/index';

//const defaultTodos = [
//  {text: "cortar cebolla", completed: true},
// {text: "terminar curso", completed: false},
// {text: "saCAR AL PERRO", completed: false},
//  {text: "BAILAR", completed: false},
//  {text: "usar estados derivados", completed: true},
//]

//localStorage.getItem('TAREAS_V1', defaultTodos)

//[{"text":"cortar cebolla","completed":true},{"text":"terminar curso","completed":false},{"text":"saCAR AL PERRO","completed":false},{"text":"BAILAR","completed":false},{"text":"usar estados derivados","completed":true}]

function App() {
      
  const [todos, saveTodos] = useLocalStorage ('TAREAS_V1', [] )

  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos = todos.filter( todos => !!todos.completed).length
  
  const totalTodos = todos.length

  const searchedTodo = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  )
    

    const todoComplete = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text == text);
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos)
    }
    const todoDelete = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text == text);
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos)
      
    }

return (
  
<AppUI
 completedTodos={completedTodos}
 totalTodos={totalTodos}
 searchValue={searchValue}
 setSearchValue={setSearchValue}
 searchedTodo={searchedTodo}
 todoComplete={todoComplete}
 todoDelete={todoDelete}

/>

)}

export default App;
