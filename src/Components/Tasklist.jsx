import React from 'react';

function Tasklist({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0) return (
    <div style={{ background: "#f9f9f9", borderRadius: "6px", padding: "20px", margin: "16px 0" }}>
      <p style={{ color: "#bbb", textAlign: "center" }}>No tasks yet!</p>
    </div>
  );

  return (
    <div style={{ marginBottom: 24 }}>
      {tasks.map(task => (
        <div key={task.id} style={{
          background: "#f6f8fa",
          borderRadius: "8px",
          padding: "14px 18px",
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <span style={{
            textDecoration: task.done ? "line-through" : "none",
            opacity: task.done ? 0.6 : 1
          }}>
            <strong>{task.text}</strong>
            {` `}
            <span style={{
              fontSize: 13,
              color: "#999"
            }}>
              ({task.priority}, {task.category})
            </span>
          </span>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            {!task.done ? (
              <button
                onClick={() => toggleTask(task.id)}
                style={{
                  color: "#1c7c30",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer"
                }}>
                Complete
              </button>
            ) : (
              <button
                onClick={() => toggleTask(task.id)}
                style={{
                  color: "#5559be",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer"
                }}>
                Undo
              </button>
            )}
            <button
              onClick={() => deleteTask(task.id)}
              style={{
                color: "#ea3a38",
                background: "transparent",
                border: "none",
                cursor: "pointer"
              }}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tasklist;
