import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {

  const [inputText, setInputText] = useState('');

  const [itens, setItens] = useState([]);

  function handleChange(event) {    //input tem implicito pass param "event"
    const newValue = event.target.value;
    setInputText(newValue)
  }

  function addIten() {
    setItens( (prevItens) => {
      return [...prevItens, inputText]
    })
    setInputText('')
  }

  function deleteItem(id) {

    setItens((prevItens) => {
      return prevItens.filter( (item, index) => {
        return index !== id
      })
    })

  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText}/>
        <button onClick={addIten}>
          <span>Adicionar</span>
        </button>
      </div>
      <div>
        <ul>
         {
          itens.map( (todoIten, index) =>  <TodoItem 
          key={index} 
          id={index} 
          text={todoIten} 
          onChecked={deleteItem}/> )
         }
        </ul>
      </div>
    </div>
  );
}

export default App;
