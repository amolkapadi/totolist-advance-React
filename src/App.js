import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([task, ...tasks]);
      setTask('');
    }
  };
  const handleDeleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };
  return (
    <div className="todo-container">
      <div className="todo-card">
        <h1>Unfinished todos:</h1>
        <ul className="task-list">
          {tasks.map((item, index) => (
            <li key={index} className="task-item">
              {item}
              <button
                className="delete-button"
                onClick={() => handleDeleteTask(index)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
        <div className="input-container">
          <input
            type="text"
            value={task}
            onChange={handleInputChange}
            className="task-input"
            placeholder="Add a task..."
          />
          <button className="add-button" onClick={handleAddTask}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
