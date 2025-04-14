import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    // fetching all posts using GET /posts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load posts');
        setLoading(false);
      });
  }, []);

  // creating a new post using POST /posts
  const createPost = async () => {
    const newPost = {
      title: 'New Post Title',
      body: 'This is a body of the new post.',
      userId: 1,
    };

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    setPosts([data, ...posts]); // add new post to the beginning of the list
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Latest Posts</h2>
      <button onClick={createPost}>Create New Post</button>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body.slice(0, 100)}...</p>
            <Link to={`/post/${post.id}`}>Read More</Link>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Home;
