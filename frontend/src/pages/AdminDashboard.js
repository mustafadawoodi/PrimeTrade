import React, { useState, useEffect } from 'react';
import API from '../api/axiosConfig';

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const res = await API.get('/users');
    setUsers(res.data);
  };

  const deleteUser = async (id) => {
    await API.delete(`/users/${id}`);
    loadUsers();
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="dashboard">
      <h2>Admin Dashboard - Manage Users</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <button onClick={() => deleteUser(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
