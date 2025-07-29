import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfileHeader = () => {
  const [user, setUser] = useState(null);   // Store fetched user
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/user/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setUser(res.data); // res.data will have username, name, etc.
      } catch (err) {
        setError('Failed to load user');
      }
    };

    fetchUser();
  }, []);

  if (error) return <p className="text-red-600">{error}</p>;

  if (!user) return <p className="text-gray-500">Loading...</p>;

  return (
    <div className="flex items-center gap-6 px-6 py-4">
      <img
        className="w-28 h-28 rounded-full border-2 border-pink-500"
        src={user.avatar || "https://www.tvhland.com/vignette/tag/202201/61ddb49de0e1e.webp"} // Optional avatar
        alt="Profile"
      />
      <div>
        <div className="flex items-center gap-4 mb-0.5">
          <h2 className='text-2xl font-semibold'>{user.name}</h2>
          <button className="bg-blue-500 text-white text-sm px-4 py-1 rounded">Follow</button>
        </div>
        <h3 className="font-semibold text-gray-500 mb-2">@{user.username}</h3>
        <div className="flex gap-6 text-sm">
          <span><strong>12</strong> posts</span>
          <span><strong>5k</strong> followers</span>
          <span><strong>300</strong> following</span>
        </div>
        <div className="mt-2 text-sm">
          <p>{user.bio || "Welcome to my profile!"}</p>
          <p>{user.title || "blogger"}</p>
          <a href={user.link || "#"} className="text-blue-500">{user.link || "linkin.bio/you"}</a>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
