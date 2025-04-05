import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import AddClient from './pages/Clients/AddClient.jsx'
import ListClients from './pages/Clients/ListClients/ListClients.jsx'



function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-client" element={<AddClient />} />
          <Route path="/listClient" element={<ListClients />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      {/* <Nav/> */}
      
      {/* <RouterProvider router={router}/> */}
    </>
  )
}

export default App
