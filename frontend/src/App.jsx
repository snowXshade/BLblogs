import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import PrivateRoute from './compo/PrivateRoute'
import Dashboard from './pages/Dashboard'
import NavBar from './compo/NavBar'
import Signup from './pages/Signup'
import MyProfile from './pages/MyProfile'

const App = () => {
  return (
    <div>
      <NavBar/>
      
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute Component={Dashboard} />
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute Component={MyProfile} />
            }
          />

          {/* Catch all unmatched routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      
    </div>
  )
}

export default App
