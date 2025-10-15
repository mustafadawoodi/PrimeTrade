import React, { useState, useEffect } from 'react';
import API from '../api/axiosConfig';
import TaskCard from '../components/TaskCard';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ title: '', description: '' });

  // Load tasks from backend
  const loadTasks = async () => {
    try {
      const res = await API.get('/tasks');
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Add new task
  const addTask = async () => {
    if (!task.title.trim()) return; // prevent empty titles
    try {
      const res = await API.post('/tasks', task);
      setTasks([...tasks, res.data]); // update UI instantly
      setTask({ title: '', description: '' });
    } catch (err) {
      console.error(err);
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      setTasks(tasks.filter((t) => t.id !== id)); // update UI instantly
    } catch (err) {
      console.error(err);
    }
  };
  const editTask = async (id, updatedTask) => {
    try {
      await API.put(`/tasks/${id}`, updatedTask);
      setTasks(tasks.map((t) => (t.id === id ? { ...t, ...updatedTask } : t)));
    } catch (err) {
      console.error(err);
    }
  };
  // Mark task as completed
  const completeTask = async (id) => {
    try {
      // Optimistically update UI
      setTasks(
        tasks.map((t) => (t.id === id ? { ...t, status: 'completed' } : t))
      );

      await API.put(`/tasks/${id}`, { status: 'completed' });
    } catch (err) {
      console.error(err);
      // Revert UI if error
      setTasks(
        tasks.map((t) => (t.id === id ? { ...t, status: 'pending' } : t))
      );
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="dashboard" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Your Tasks</h2>

      <div className="task-form" style={{ marginBottom: '20px' }}>
        <input
          placeholder="Title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          style={{ marginRight: '10px', padding: '5px', width: '40%' }}
        />
        <input
          placeholder="Description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          style={{ marginRight: '10px', padding: '5px', width: '40%' }}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          tasks.map((t) => (
            <TaskCard
              key={t.id}
              task={t}
              onDelete={deleteTask}
              onComplete={completeTask}
              onEdit={editTask}
            />
          ))
        )}
      </div>
    </div>
  );
}
