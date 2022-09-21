// criação de component todo item
import React, { useState } from "react";

function TodoItem(props) {

    

    function handleClick() {

     
    }

    return (
        <div onClick={ () => {
            props.onCheked(props.id)
        }}>
           <li>{props.text}</li>
        </div>
    )
}

export default TodoItem;

/*const [isDone, setIsDone] = useState(false)
   setIsDone( (prevValue) => {     //acesso de estado da aplicação via parâmetro
            return !prevValue           //not nega: o que é true passa a ser false e vice versa
        })
 style={ {textDecoration: isDone ? 'line-through' : 'none'} }*/