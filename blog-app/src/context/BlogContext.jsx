// context/BlogContext.js
import React, { createContext, useState, useEffect } from 'react';

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(storedBlogs);
  }, []);

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
  };

  const updateBlog = (updatedBlog) => {
    const updatedList = blogs.map((b) => (b.id === updatedBlog.id ? updatedBlog : b));
    setBlogs(updatedList);
  };

  const deleteBlog = (id) => {
    const filtered = blogs.filter((b) => b.id !== id);
    setBlogs(filtered);
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
