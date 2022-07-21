import React,{useState}from 'react'

 function TodoForm({addTodo}) {

const[userInput,setUserInput]=useState('');

const handleOnChange=(e)=>{
setUserInput(e.currentTarget.value)  }

const handleSubmit=(e)=>{
e.preventDefault();
if(userInput.trim() !==''){
addTodo(userInput);
setUserInput('');
    
}
}

return (
    <div style={{margin:20}}>
      <form onSubmit={handleSubmit}>
        <h1>NUCBA TO-DO LIST</h1>
        <input type="text" value={userInput} onChange={handleOnChange}/>
        <button className='boton'>Agregar Tarea</button>
        </form>  

    </div>
  )
}


 

export default TodoForm