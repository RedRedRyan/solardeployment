import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all"
import Navbar from './components/Navbar.jsx'

// Import page components
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Technology from './pages/Technology'
import Contact from './pages/Contact'

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/technology" element={<Technology />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    )
}
export default App
