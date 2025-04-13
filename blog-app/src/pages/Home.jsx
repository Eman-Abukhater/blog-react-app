import React, { useContext, useState } from 'react';
import { BlogContext } from '../context/BlogContext';
import BlogCard from '../components/BlogCard';

const Home = () => {
  const { blogs } = useContext(BlogContext);
  const [search, setSearch] = useState('');

  const filtered = blogs.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.tags.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='home-container' >
      <h1>All Blogs</h1>
      <input placeholder="Search by title or tag" onChange={(e) => setSearch(e.target.value)} />
      {filtered.length ? (
        filtered.map((blog) => <BlogCard key={blog.id} blog={blog} />)
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
};

export default Home;
