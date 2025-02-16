import { useState } from "react";
import React from 'react'
import "./App.css"
import TodoInput from './components/TodoInput';
import TodoList from "./components/TodoList";

function App() {
  const[listTodo,setListTodo]=useState([]);
  // function to pass data from child componet to parent comp by the help of props
  const addList=(inputText)=>{
    if(inputText!=='')
    setListTodo([...listTodo,inputText]); //adding value to list after previous data using ...
  }
  const deleteListItem = (key) =>{
    let newListTodo=[...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  
  return (
    <div className="main-container">
      <div className="center-container">
      <h1 className="app-heading">Todo App</h1>
        {/* props i.e "addList"(can be any name) pass a function i.e addList(function name) which take input given by user in input section */}
      <TodoInput addList={addList}/> 
      
      <hr />
      {listTodo.map((listItem,i)=>{
        return(
          <TodoList key={i} index={i} item={listItem} delete={deleteListItem}/>
        )
      })}
      
      </div>
    </div>
  )
}

export default App;
