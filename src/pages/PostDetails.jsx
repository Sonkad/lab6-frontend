import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
  const { id } = useParams();  // get post id from the url
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedBody, setUpdatedBody] = useState('');

  useEffect(() => {
    // fetching post details
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setUpdatedTitle(data.title);
        setUpdatedBody(data.body);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load post');
        setLoading(false);
      });

    // fetching comments for this post
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((err) => {
        setError('Failed to load comments');
        setLoading(false);
      });
  }, [id]);

  // PUT
  const updatePost = async () => {
    const updatedPostData = {
      title: updatedTitle,
      body: updatedBody,
      userId: post.userId,
    };

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedPostData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    setPost(data); 
    console.log('Post Updated:', data);
  };

  // PATCH
  const patchPost = async () => {
    const updatedPostData = {
      title: updatedTitle,
      body: updatedBody,
    };

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedPostData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    setPost(data); //    updakte the post in state with the new data
    console.log('Post Patched:', data);
  };

  const deletePost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.status === 200) {
        console.log('Post Deleted');


        alert('Post deleted successfully!');
       
        window.location.href = '/home';
      } else {
        console.log('Failed to delete post')
      }
    };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {post && (
        <div className="post-card">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )}

      <h4>Comments</h4>
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <h5>{comment.name}</h5>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>

      {/* form to update post title and body */}
      <div>
        <h4>Update Post</h4>
        <input
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
          placeholder="New title"
        />
        <textarea
          value={updatedBody}
          onChange={(e) => setUpdatedBody(e.target.value)}
          placeholder="New body"
        />
      </div>

      <div>
        <button onClick={updatePost}>Update Post (PUT)</button>
        <button onClick={patchPost}>Update Post (PATCH)</button>
        <button onClick={deletePost}>Delete Post</button>
      </div>
    </div>
  );
};

export default PostDetails;
