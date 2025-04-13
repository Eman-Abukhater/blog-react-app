import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState(() => {
    const data = localStorage.getItem('blogs');
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  const addBlog = (blog) => {
    blog.id = uuidv4();
    blog.reviews = [];
    blog.rating = 0;
    setBlogs([...blogs, blog]);
  };

  const updateBlog = (updated) => {
    setBlogs(blogs.map((b) => (b.id === updated.id ? updated : b)));
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((b) => b.id !== id));
  };

  const addReview = (id, review) => {
    const updated = blogs.map((b) => {
      if (b.id === id) {
        const newReviews = [...b.reviews, review];
        const avgRating = newReviews.reduce((acc, r) => acc + r.rating, 0) / newReviews.length;
        return { ...b, reviews: newReviews, rating: avgRating.toFixed(1) };
      }
      return b;
    });
    setBlogs(updated);
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog, addReview }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
