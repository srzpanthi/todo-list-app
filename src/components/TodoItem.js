import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, setTodos, todos, editTodo }) {
  const deleteTodo = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  return (
    <div className="card">
      <div className="card-content">
        <p>{todo.text}</p>
      </div>
      <div className="card-buttons">
        <button onClick={() => editTodo(todo)}>Edit</button>
        <button onClick={deleteTodo}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
