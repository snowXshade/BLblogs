// PrivateRoute.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

const PrivateRoute = (props) => {
  const { Component } = props
  const navigate = useNavigate()

  useEffect(() => {
    
    let login = localStorage.getItem('login')
    if(!login){
      navigate('/')
    }
  })
  
  return (
  <div>
    <Component />
  </div>
)

}



export default PrivateRoute;
