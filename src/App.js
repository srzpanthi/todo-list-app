import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, id: Date.now() }]);
      setInput('');
    }
  };

  const editTodo = (todo) => {
    setIsEditing(true);
    setCurrentTodo(todo);
    setInput(todo.text);
  };

  const saveTodo = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === currentTodo.id ? { ...todo, text: input } : todo
      )
    );
    setIsEditing(false);
    setCurrentTodo(null);
    setInput('');
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
        />
        <button onClick={isEditing ? saveTodo : addTodo}>
          {isEditing ? 'Save' : 'Add'}
        </button>
      </div>
      <TodoList todos={todos} setTodos={setTodos} editTodo={editTodo} />
    </div>
  );
}

export default App;
