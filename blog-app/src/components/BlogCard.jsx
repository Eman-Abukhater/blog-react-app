import React from "react";
import { useNavigate } from "react-router-dom";

function BlogCard({ blog }) {
  const navigate = useNavigate();
  return (
    <div className="card">
      <h3>{blog.title}</h3>
      <p>Author: {blog.author}</p>
      <p>Tags: {blog.tags}</p>
      <button onClick={() => navigate(`/view/${blog.id}`)}>Read</button>
      <button onClick={() => navigate(`/edit/${blog.id}`)}>Edit</button>
    </div>
  );
}

export default BlogCard;
