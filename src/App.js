import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, id: Date.now() }]);
      setInput('');
    }
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
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
