import React, { useState } from 'react';
import Taskform from './Components/Taskform';
import Tasklist from './Components/Tasklist';
import Progresstracker from './Components/Progresstracker';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), done: false }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const clearTasks = () => setTasks([]);

  return (
    <div style={{
      maxWidth: "600px",
      margin: "40px auto",
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 4px 32px rgba(34, 42, 59, 0.10)",
      padding: "32px"
    }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>TaskBuddy</h1>
      <p>Your friendly Task Manager</p>
      <Taskform addTask={addTask} />
      <Tasklist tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      <Progresstracker tasks={tasks} clearTasks={clearTasks} />
    </div>
  );
}

export default App;
