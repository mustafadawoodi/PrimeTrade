import React, { useState } from 'react';

export default function TaskCard({ task, onDelete, onComplete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState({
    title: task.title,
    description: task.description,
  });
  const isCompleted = task.status === 'completed';

  const handleSave = () => {
    onEdit(task.id, editTask);
    setIsEditing(false);
  };

  return (
    <div
      className="task-card"
      style={{
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: isCompleted ? '#d4edda' : '#fff', // green if completed
      }}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={editTask.title}
            onChange={(e) =>
              setEditTask({ ...editTask, title: e.target.value })
            }
            style={{ marginBottom: '5px', padding: '5px' }}
          />
          <textarea
            value={editTask.description}
            onChange={(e) =>
              setEditTask({ ...editTask, description: e.target.value })
            }
            style={{ marginBottom: '10px', padding: '5px' }}
          />
        </>
      ) : (
        <>
          <h3
            style={{
              margin: '0 0 5px 0',
              textDecoration: isCompleted ? 'line-through' : 'none',
              color: isCompleted ? '#6c757d' : '#000',
            }}
          >
            {task.title}
          </h3>
          <p
            style={{
              margin: '0 0 10px 0',
              textDecoration: isCompleted ? 'line-through' : 'none',
              color: isCompleted ? '#6c757d' : '#333',
            }}
          >
            {task.description}
          </p>
        </>
      )}

      <div style={{ display: 'flex', gap: '10px' }}>
        {!isCompleted && !isEditing && (
          <button
            onClick={() => onComplete(task.id)}
            style={{
              padding: '5px 10px',
              cursor: 'pointer',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '3px',
            }}
          >
            Complete
          </button>
        )}

        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            style={{
              padding: '5px 10px',
              cursor: 'pointer',
              backgroundColor: '#ffc107',
              color: '#000',
              border: 'none',
              borderRadius: '3px',
            }}
          >
            Edit
          </button>
        )}

        {isEditing && (
          <button
            onClick={handleSave}
            style={{
              padding: '5px 10px',
              cursor: 'pointer',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '3px',
            }}
          >
            Save
          </button>
        )}

        {isEditing && (
          <button
            onClick={() => setIsEditing(false)}
            style={{
              padding: '5px 10px',
              cursor: 'pointer',
              backgroundColor: '#6c757d',
              color: '#fff',
              border: 'none',
              borderRadius: '3px',
            }}
          >
            Cancel
          </button>
        )}

        <button
          onClick={() => onDelete(task.id)}
          style={{
            padding: '5px 10px',
            cursor: 'pointer',
            backgroundColor: '#dc3545',
            color: '#fff',
            border: 'none',
            borderRadius: '3px',
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
