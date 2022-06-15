import './App.css';
import { useEffect, useState } from 'react';
// import Blogs from './blogs.json'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Blog from './Components/Blog';
import Categories from './Components/Categories';
import AddPost from './Components/AddPost';
import About from './Components/About';

function App() {
  const [Blogs, setBlogs] = useState([]);
  async function getBlogs() {
    const response = await fetch('http://localhost:5000/api/blog/all', {
      method: 'GET',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
    });
    const json = await response.json();
    setBlogs(json);
  }
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home blogs={Blogs} />} />
          <Route exact path="/blogs" index element={<Blog blogs={Blogs} />} />
          <Route exact path="/categories" index element={<Categories />} />
          <Route exact path="/addpost" index element={<AddPost />} />
          <Route exact path="/about" index element={<About />} />
          {/* <Route path="/home" element={<Home addRow={addRow} rows={rowList} onDelete={onDelete} />} />
          <Route path="login" element={<Login />} /> */}
          {/* <Route path="signup" element={<Signup />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
