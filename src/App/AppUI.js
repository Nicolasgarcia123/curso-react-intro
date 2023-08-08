import React from 'react';
import {TodoCounter} from '../todocounter/index'
import { TodoItems } from '../todoitem/index';
import { TodoSearch } from '../todosearch/index';
import { TodoList } from '../todolist/index';
import { CreateTodoButton } from '../createtodobutton/index';


function AppUI (
    {completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodo,
    todoComplete,
    todoDelete,
  }
    
) {

 return (

    <>

     
     <TodoCounter 
        completed ={completedTodos}
        total ={totalTodos} 
        />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodo.map (todo => (
        <TodoItems
          key={todo.text}
          text={todo.text}  
          completed = {todo.completed} 
          onComplete= {() => todoComplete(todo.text)}
          onDelete =  {() => todoDelete(todo.text)}
           />
                
        ))}
       
      </TodoList>
      <CreateTodoButton/> 
    
      </>
  );
  }

  export {AppUI}; 