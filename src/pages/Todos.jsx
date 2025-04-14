import React, { useEffect, useState } from 'react';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=200') // fetching 200 todos
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching todos');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading todos...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>Status: {todo.completed ? 'Completed' : 'Not completed'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
