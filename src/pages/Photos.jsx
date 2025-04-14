import React, { useEffect, useState } from 'react';

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=100')  // fetching 100 photos at a time
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching photos');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading photos...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Photos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
        {photos.map((photo) => (
          <div key={photo.id} style={{ textAlign: 'center' }}>
            <img src={photo.url} alt={photo.title} style={{ width: '100%', borderRadius: '8px' }} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
