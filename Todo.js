import React, { useState } from "react";
import './Todo.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    if (input) {
      if (editingIndex !== null) {
        // If editing, update the existing todo
        const updatedTodos = [...todos];
        updatedTodos[editingIndex] = input;
        setTodos(updatedTodos);
        setEditingIndex(null);
      } else {
        // If not editing, add a new todo
        setTodos([...todos, input]);
      }

      setInput("");
    }
  };

  const editTodo = (index) => {
    setEditingIndex(index);
    setInput(todos[index]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="mainContainer">

      <div className="bgImage">

      </div>
      <div className="todoApp">
        <div className="innerContainer">
          <input
            type="text"
            className="inputTodo"
            value={input}
            onChange={handleInput}
            placeholder="Enter a todo..."
          />
          <button onClick={addTodo} className="btnTodo">
            {editingIndex !== null ? "Update Todo" : "Add Todo"}
          </button>
        </div>
        <div className="todoInner">
          <ul>
            {todos.map((todo, i) => (
              <li key={i} className="todoLi">
                {editingIndex === i ? (
                  <div className="miniContainer">
                    <input
                      type="text"
                      value={input}
                      className="inputTodo"
                      onChange={handleInput}
                    />
                    <button  className="btnTodo" onClick={addTodo}>Save</button>
                  </div>
                ) : (
                  <div className="miniContainer">
                    <div className="todoText">
                      {todo}
                    </div>
                    <button  className="btnTodo1" onClick={() => editTodo(i)}>Edit</button>
                    <button  className="btnTodo" onClick={() => deleteTodo(i)}>Delete</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoApp;