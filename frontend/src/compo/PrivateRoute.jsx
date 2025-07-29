// PrivateRoute.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ Component }) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      setIsAuth(true);
    }
  }, [navigate]);

  return isAuth ? <Component /> : null;
};

export default PrivateRoute;
