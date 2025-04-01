import React from 'react'
import { BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
