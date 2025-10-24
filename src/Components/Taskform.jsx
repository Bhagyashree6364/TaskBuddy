import React, { useState } from 'react';

function Taskform({ addTask }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('General');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    addTask({ text, priority, category });
    setText('');
    setPriority('Medium');
    setCategory('General');
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: "flex",
      gap: "8px",
      alignItems: "center",
      marginBottom: 24
    }}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a task..."
        style={{
          flex: 1,
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "6px"
        }}
      />
      <button type="submit" style={{
        padding: "10px 16px",
        background: "#222b52",
        color: "white",
        border: "none",
        borderRadius: "6px",
        fontWeight: "bold",
        cursor: "pointer"
      }}>Add Task</button>
      <select value={priority} onChange={e => setPriority(e.target.value)}
        style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ddd" }}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <select value={category} onChange={e => setCategory(e.target.value)}
        style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ddd" }}>
        <option>General</option>
        <option>Work</option>
        <option>Personal</option>
      </select>
    </form>
  );
}

export default Taskform;
