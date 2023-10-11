import React,{useState} from "react";
import Todo from './Todo';

export default function TodoList(){
  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  }
  const addTodo = () => {
    if(input.trim() !== ''){
      setTodos([...todos,input]);
      setInput('');
    }
  }
  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index,1);
    setTodos(updatedTodos);
  }

  return(
    <div>
      <h1>
        Enter Todo
      </h1>
      <input 
        onChange={handleInput}
        type="text"
        placeholder="Enter Todo"
        value={input}
      />
      <button onClick={addTodo}>Add Todo</button>
        {todos.map((todo,index) =>
          <Todo
            text={todo}
            key={index}
            onDelete={() => deleteTodo(index)}
          />
        )}
         
    </div>
  )
}
