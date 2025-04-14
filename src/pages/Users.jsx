import React, { useEffect, useState } from 'react';
import './Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')  // fetch 10 users
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching users');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="users-container">
      <h2>Users</h2>
      <div className="user-cards">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img
              src={`https://i.pravatar.cc/150?img=${user.id}`}  // generate a random avatar using user ID
              alt={`${user.name} avatar`}
              className="user-avatar"
            />
            <div className="user-info">
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
