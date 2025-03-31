import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Nav from "./components/Nav.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/about.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about",
    element: <About/>
  }
])

function App() {

  return (
    <>
    {/* <Topbar/> */}
    <Nav/>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
