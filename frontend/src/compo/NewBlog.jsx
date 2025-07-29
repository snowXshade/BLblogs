import React, { useState } from 'react';
import Editor from './Editor';
import './newblog.css';
import axios from 'axios';

export default function NewBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(null); // JSON

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token'); // or get from auth context

    const blogData = {
      title,
      content,
      createdAt: new Date()
    };

    try {
      const res = await axios.post('http://localhost:3000/api/blog/new', blogData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Blog submitted:', res.data);
    } catch (error) {
      console.error('Failed to submit blog:', error);
    }
  };

  return (
    <div className="newblog-container">
      <h2>Create New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter blog title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="title-input"
          required
        />
        <Editor setContent={setContent} />
        <button type="submit" className="submit-btn">Publish</button>
      </form>
    </div>
  );
}
