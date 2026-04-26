import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    
    if (inputValue.trim() === '') return; 

    const newTask = {
      id: Date.now(),
      text: inputValue
    };

    setTasks([...tasks, newTask]); 

    setInputValue(''); 
  };

  const handleRemoveTask = (idToRemove) => {
    const updatedTasks = tasks.filter((task) => task.id !== idToRemove);
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <h1>Minha To-Do List</h1>
      <form onSubmit={handleAddTask} className="task-form">
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Adicione uma nova tarefa..."
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span>{task.text}</span>
            <button onClick={() => handleRemoveTask(task.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;