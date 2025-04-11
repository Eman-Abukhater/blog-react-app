import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogContext } from './context/BlogContext'; // Import the context
import BlogProvider from './context/BlogContext';
import Home from './pages/Home';

function App() {

  return (
    <div>
      <BlogProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </BlogProvider>
    </div>
  )
}

export default App