import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

const EditBlog = () => {
  const { id } = useParams();
  const { blogs, updateBlog } = useContext(BlogContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    author: "",
    tags: "",
  });

  useEffect(() => {
    const blog = blogs.find((b) => b.id === id);
    if (blog) setForm(blog);
  }, [id, blogs]);

  if (!form) return <p>Loading...</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBlog(form);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Blog</h2>
      <input
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        value={form.author}
        onChange={(e) => setForm({ ...form, author: e.target.value })}
      />
      <input
        value={form.tags}
        onChange={(e) => setForm({ ...form, tags: e.target.value })}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditBlog;
