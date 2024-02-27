import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Pages/layouts/Navbar';
import Home from './components/Pages/Home';
import Footer from './components/Pages/layouts/Footer';
import Blogs from './components/Blogs/Blogs';
import Login from './components/Authentication/Users/Login';
import Signup from './components/Authentication/Users/Signup';
import NewBlog from './components/Blogs/NewBlog/NewBlog';
import Blog from './components/Blogs/Blog/Blog';
import { tempBlogs } from './data/blogs';
import Posts from './components/Posts/Posts';
import Post from './components/Posts/Post/Post';
import NewPost from './components/Posts/NewPost/NewPost';
import { postType, tempPosts } from './data/post';
import Services from './components/Pages/Services/Services';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';


type blogType = {
  id: string,
  title: string,
  image: string,
  content: string,
  category: string
}

const App: React.FC = () => {

  const [blogs, setBlogs] = useState<blogType[]>(tempBlogs);
  const [posts, setPosts] = useState<postType[]>(tempPosts);

  const [category, setCategory] = useState<Boolean>(true);

  const toggleCategory = () => {
    setCategory((preCat) => !preCat);
  }


  return (
    <>
      <Router>
        <Navbar category={category} setCategory={toggleCategory} />
        <Routes>

          {/* Static Routes */}

          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />


          {/* Authentication Routes */}

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Blogs Routes */}
          <Route path="/blogs" element={<Blogs blogs={blogs} />} />
          <Route path="/blogs/new" element={<NewBlog setBlogs={setBlogs} />} />
          <Route path="/blogs/:blogID" element={<Blog blogs={blogs} />} />

          {/* Posts Routes */}
          <Route path="/posts" element={<Posts posts={posts} />} />
          <Route path="/posts/new" element={<NewPost setPosts={setPosts} />} />
          <Route path="/posts/:postID" element={<Post posts={posts} />} />

        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
