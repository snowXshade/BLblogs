import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Settings = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Get user data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/user/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setUser(res.data);
        setName(res.data.name || '');
      } catch (err) {
        setError('Failed to load user');
      }
    };
    fetchUser();
  }, []);

  // Update user
  const handleUpdate = async () => {
    try {
      const res = await axios.put('http://localhost:3000/api/user/update', {
        name,
        password
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setMessage('Profile updated successfully');
      setPassword('');
    } catch (err) {
      setError('Update failed');
    }
  };

  // Delete user
  const handleDelete = async () => {
    const confirm = window.confirm('Are you sure you want to delete your account? This cannot be undone.');
    if (!confirm) return;

    try {
      await axios.delete('http://localhost:3000/api/user/delete', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      localStorage.removeItem('token');
      window.location.href = '/signup';
    } catch (err) {
      setError('Failed to delete account');
    }
  };

  const profileURL = user ? `${window.location.origin}/dashboard/my-profile/${user._id}` : '';

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">Account Settings</h2>

      {error && <p className="text-red-600 mb-2">{error}</p>}
      {message && <p className="text-green-600 mb-2">{message}</p>}

      {user && (
        <>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Username</label>
            <input type="text" value={user.username} disabled className="w-full bg-gray-100 px-3 py-2 rounded border mt-1" />
          </div>

          <div className="mb-4">
            <label className="block font-medium text-gray-700">Email</label>
            <input type="email" value={user.email} disabled className="w-full bg-gray-100 px-3 py-2 rounded border mt-1" />
          </div>

          <div className="mb-4">
            <label className="block font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded border mt-1"
              placeholder="Your name"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium text-gray-700">New Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded border mt-1"
              placeholder="Enter new password"
            />
          </div>

          <button
            onClick={handleUpdate}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Save Changes
          </button>

          <div className="mt-6">
            <label className="block font-medium text-gray-700">Shareable Profile URL</label>
            <div className="flex items-center mt-1">
              <input
                type="text"
                value={profileURL}
                readOnly
                className="w-full px-3 py-2 border rounded-l bg-gray-100"
              />
              <button
                onClick={() => navigator.clipboard.writeText(profileURL)}
                className="bg-gray-300 px-4 py-2 rounded-r hover:bg-gray-400"
              >
                Copy
              </button>
            </div>
          </div>

          <hr className="my-6" />

          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Delete Account
          </button>
        </>
      )}
    </div>
  );
};

export default Settings;
