import React from 'react';
import './TodoItem.css';

function TodoItem({ todo }) {
  return (
    <div className="card">
      <div className="card-content">
        <p>{todo.text}</p>
      </div>
    </div>
  );
}

export default TodoItem;
