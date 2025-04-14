import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Albums from './pages/Albums';
import Users from './pages/Users';
import Photos from './pages/Photos';  // Make sure this import is correct
import Todos from './pages/Todos';
import PostDetails from './pages/PostDetails';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="post/:id" element={<PostDetails />} /> {/* Details of a specific post */}
          <Route path="albums" element={<Albums />} />
          <Route path="users" element={<Users />} />
          <Route path="photos" element={<Photos />} />  {/* Ensure this route exists */}
          <Route path="todos" element={<Todos />} />
          <Route path="error" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
