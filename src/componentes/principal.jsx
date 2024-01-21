import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home'

function Principal() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/food" element={<Food_page/>} ></Route>
      </Routes>
    </Router>
  )
}

export default Principal