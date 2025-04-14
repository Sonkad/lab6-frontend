import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1>Oooooops! Smth went wrong</h1>
      <p>We could not find page you are looking for!</p>
      <Link to="/home" className="error-link">Bro go back to Home</Link>
    </div>
  );
};

export default ErrorPage;
