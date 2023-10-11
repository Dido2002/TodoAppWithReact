import React from 'react';

const Todo = ({text, onDelete}) => {
  return(
    <div>
      {text}
      <button onClick={onDelete}>Delete Todo</button>
    </div>
  )
}
export default Todo;