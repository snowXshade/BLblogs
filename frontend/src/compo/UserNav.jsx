// usernavbar.jsx
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function UserNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const linkClass = ({ isActive }) =>
    `block px-6 py-3 rounded transition ${
      isActive ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-700'
    }`;

  return (
    <nav className="fixed top-0 left-0 h-full w-48 bg-blue-800 flex flex-col items-center py-10 shadow-lg">
      <ul className="flex flex-col gap-4 w-full">
        <li>
          <NavLink to="/dashboard/new-blog" className={linkClass}>
            New Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/my-profile" className={linkClass}>
            My Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/settings" className={linkClass}>
            Settings
          </NavLink>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="w-full text-left px-6 py-3 text-white hover:bg-red-600 rounded transition"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
