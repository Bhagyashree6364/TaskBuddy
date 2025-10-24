import React from 'react';

function Progresstracker({ tasks, clearTasks }) {
  const total = tasks.length;
  const doneCount = tasks.filter(t => t.done).length;
  const percent = total === 0 ? 0 : Math.round((doneCount / total) * 100);

  if (total === 0) return null;

  return (
    <div>
      <span style={{ fontWeight: "bold" }}>
        {doneCount} out of {total} tasks Completed
      </span>
      <div style={{
        height: 12,
        width: "100%",
        background: "#eee",
        borderRadius: 5,
        margin: "8px 0"
      }}>
        <div style={{
          height: "100%",
          width: `${percent}%`,
          background: "#3cb371",
          borderRadius: 5,
          transition: "width 0.3s"
        }} />
      </div>
      <button
        onClick={clearTasks}
        style={{
          background: "#ea3a38",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "8px 16px",
          marginTop: "10px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Clear All Tasks
      </button>
    </div>
  );
}

export default Progresstracker;
