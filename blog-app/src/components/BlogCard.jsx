import React from 'react'

function BlogCard({blog}) {
  return (
    <div className="card">
      <h2>{blog.title}</h2>
      <p>Author: {blog.author}</p>
      <p>Tags: {blog.tags}</p>
      <p>Rating: {blog.rating || 'No ratings yet'}</p>

    </div>
  )
}

export default BlogCard