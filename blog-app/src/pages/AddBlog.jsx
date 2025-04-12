import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';

const AddBlog = () => {
  const [form, setForm] = useState({ title: '', description: '', author: '', tags: '' });
  const { addBlog } = useContext(BlogContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.description || !form.author) {
      alert('Please fill all fields');
      return;
    }
    addBlog(form);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Blog</h2>
      <input placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <textarea placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })} />
      <input placeholder="Author" onChange={(e) => setForm({ ...form, author: e.target.value })} />
      <input placeholder="Tags" onChange={(e) => setForm({ ...form, tags: e.target.value })} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddBlog;
