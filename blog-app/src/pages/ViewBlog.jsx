import React, { useContext } from "react";
import { useParams } from "react-router-dom";

function ViewBlog() {
  const { id } = useParams();
  const { blogs, deleteBlog, addReview } = useContext(BlogContext);
  const blog = blogs.find((b) => b.id === id);
  const [review, setReview] = useState({
    comment: "",
    rating: 0,
  });

  if (!blog) return <p>Blog not found...</p>;
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

      <h3>Add a Review:</h3>
    </div>
  );
}

export default ViewBlog;
