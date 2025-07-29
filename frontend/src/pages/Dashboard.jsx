import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Outlet } from 'react-router-dom';
import UserNav from '../compo/UserNav';
import { useAuth } from '../context/AuthContext'; // adjust path

const Dashboard = () => {
  const navigate = useNavigate();
   const { logout } = useAuth();
  const [error, setError] = useState('');
const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/');
        return;
      }

      try {
        await axios.get('http://localhost:3000/api/auth/protected', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLoading(false);
      } catch (err) {
        setError('Unauthorized! Please login again.');
        localStorage.removeItem('token');
        logout();
        setTimeout(() => navigate('/login'), 1500);
      }
    };

    fetchDashboard();
  }, [navigate]);

  return (
    <div className="relative flex z-20">
      <UserNav />
      <main className="ml-48 p-6 w-full min-h-screen bg-gray-100">
        {/* ✅ Show loading message */}
        {loading && <p className="text-blue-600 text-center">Loading your dashboard...</p>}

        {/* ✅ Show error if token is invalid */}
        {error && <p className="text-red-600 text-center">{error}</p>}

        {/* ✅ Only render Outlet if no error and not loading */}
        {!error && !loading && <Outlet />}
      </main>
    </div>
  );
};

export default Dashboard;
