import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import Products from './pages/Products';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/products" element={<Products />}/>
          <Route exact path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
