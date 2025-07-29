import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/');
        return;
      }

      try {
        const res = await axios.get('http://localhost:5000/protected', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setWelcomeMessage(res.data.message);
      } catch (err) {
        setError('Unauthorized! Please login again.',err);
        localStorage.removeItem('token');
        setTimeout(() => navigate('/login'), 1500);
      }
    };

    fetchDashboard();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-md text-center">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">Dashboard</h2>

        {welcomeMessage && (
          <p className="text-lg text-green-700 font-medium mb-4">{welcomeMessage}</p>
        )}
        {error && (
          <p className="text-red-600 text-sm font-medium mb-4">{error}</p>
        )}

        <button
          onClick={handleLogout}
          className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
