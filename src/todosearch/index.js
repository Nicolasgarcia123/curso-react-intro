import React from "react"
import './todosearch.css'

function TodoSearch ({
    searchValue, 
    setSearchValue,
}) {
         
    return (
        <input 
          placeholder="saludar al despertar" 
            className="TodoSearch"
            onChange={(event) =>{setSearchValue(event.target.value)
            
             }}
        />
    )
}

export {TodoSearch}