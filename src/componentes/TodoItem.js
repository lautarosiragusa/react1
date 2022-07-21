import React from 'react'

function TodoItem({todo,onComplete,onDeleteItem}) {

const getStyle=()=>{
     return{
        
        margin:'20px',
        border:'2px solid black',
        backgroundColor:'#CCF7E3',
    }
}

   

  return (
    <div style={getStyle()}>
    <input  type='checkbox' cheked={todo.completed} onChange={()=>onComplete(todo.id)}></input>
    {todo.task}
    <button className='botonEliminar' onClick={()=>onDeleteItem(todo.id)}>Eliminar</button>

    </div>
  )
}


export default TodoItem;