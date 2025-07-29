import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NavBar from './compo/NavBar';
import PrivateRoute from './compo/PrivateRoute';

import Dashboard from './pages/Dashboard';
import MyProfile from './compo/MyProfile';
import NewBlog from './compo/NewBlog'; 
import Settings from './compo/Settings';

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Private Nested Dashboard */}
        <Route
          path="/dashboard"
          element={<PrivateRoute Component={Dashboard} />}
        >
          <Route path="my-profile" element={<MyProfile />} />
          <Route path="new-blog" element={<NewBlog />} /> 
          <Route path="settings" element={<Settings />} /> 
        </Route>

        {/* Catch all unmatched */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
