import React, { useEffect, useState } from 'react';
import './Albums.css';



const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetching albums for user 1 using /users/1/albums
    fetch('https://jsonplaceholder.typicode.com/users/1/albums')
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load albums');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Albums for Users</h2>
      <div>
        {albums.map((album) => (
          <div key={album.id} className="album-card">
            <h3>{album.title}</h3>
            <p>Album ID: {album.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Albums;
