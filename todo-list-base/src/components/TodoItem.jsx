import React, { useState } from 'react';


function TodoItem(props) {

    return ( 
        <div onClick={ () => {
            props.onChecked(props.id)
        } }>
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