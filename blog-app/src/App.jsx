import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlogContext } from "./context/BlogContext"; // Import the context
import BlogProvider from "./context/BlogContext";
import Home from "./pages/Home";

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
