import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogContext } from './context/BlogContext'; // Import the context

function App() {
  const { blogs, addBlog, updateBlog, deleteBlog } = useContext(BlogContext); // Access context here

  return (
    <div>
      
    </div>
  )
}

export default App