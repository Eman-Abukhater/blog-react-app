import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';

const ViewBlog = () => {
  const { id } = useParams();
  const { blogs, deleteBlog, addReview } = useContext(BlogContext);
  const blog = blogs.find((b) => String(b.id) === String(id)); // Make sure types match
  const [review, setReview] = useState({ rating: '', comment: '' });

  if (!blog) return <p>Blog not found.</p>; // This prevents the crash

  const handleReview = (e) => {
    e.preventDefault();
    addReview(id, { ...review, rating: Number(review.rating) });
    setReview({ rating: '', comment: '' });
  };

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
      <p>By: {blog.author}</p>
      <p>Tags: {blog.tags}</p>
      <p>Rating: {blog.rating}</p>
      <h3>Reviews:</h3>
      <ul>
        {blog.reviews.map((r, i) => (
          <li key={i}>
            ⭐ {r.rating} - {r.comment}
          </li>
        ))}
      </ul>

      <form onSubmit={handleReview}>
        <input
          type="number"
          min="1"
          max="5"
          value={review.rating}
          onChange={(e) => setReview({ ...review, rating: e.target.value })}
          placeholder="Rating"
        />
        <input
          value={review.comment}
          onChange={(e) => setReview({ ...review, comment: e.target.value })}
          placeholder="Write a review"
        />
        <button type="submit">Submit Review</button>
      </form>

      <button onClick={() => deleteBlog(id)}>Delete Blog</button>
    </div>
  );
};

export default ViewBlog;
