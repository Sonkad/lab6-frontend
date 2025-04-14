import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]); // state for storing albums

  useEffect(() => {
    // fetching latest posts
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log('Error fetching posts:', err));
  }, []);

  useEffect(() => {
    // fetching albums data
    fetch('https://jsonplaceholder.typicode.com/albums?_limit=5') // fetching 5 albums
      .then((response) => response.json())
      .then((data) => setAlbums(data)) // store  albums in state
      .catch((err) => console.log('Error fetching albums:', err));
  }, []); // empty dependency array to fetch once when component mounts

  return (
    <aside className="sidebar-container">
      <h2>Latest Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`} className="sidebar-link">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      
      {/* display fetched albums */}
      <h2>Latest Albums</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <Link to={`/albums/${album.id}`} className="sidebar-link">
              {album.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
