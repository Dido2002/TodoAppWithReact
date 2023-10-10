import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodo = [...todos];
    updatedTodo.splice(todos,1);
    setTodos(updatedTodo);
  }  
  
  return(
    <>  
      <div>
        <h1>Enter You Todos: </h1>
        <div>
            <input
              type='text'
              onChange={handleInputChange}
              value={input}
              placeholder='Enter TODO'
            />
        </div>     
        <button onClick={addTodo}>Add Todo</button>
        <ul>
          {todos.map((todo, index) => 
            <li key={index}>
              {todo}
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          )}
        </ul>             
      </div>
    </>
  )
}

export default App;
