import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogProvider from "./context/BlogContext";
import Home from "./pages/Home";
import AddBlog from "./pages/AddBlog";
import EditBlog from "./pages/EditBlog";
import ViewBlog from "./pages/ViewBlog";

function App() {
  return (
    <div>
      <BlogProvider>
        <Router>
          <nav>
            <Link to="/">Home</Link> | <Link to="/add">Add Blog</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddBlog />} />
            <Route path="/edit/:id" element={<EditBlog />} />
            <Route path="/view/:id" element={<ViewBlog />} />{" "}
          </Routes>
        </Router>
      </BlogProvider>
    </div>
  );
}

export default App;
