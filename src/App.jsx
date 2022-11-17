import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Support from './pages/Support';
import Downloads from './pages/Downloads';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/products/:categories" element={ <Products /> } />
          <Route exact path="/product/:id" element={ <ProductDetails /> } />
          <Route exact path="/support" element={ <Support /> } />
          <Route exact path="/downloads" element={ <Downloads /> } />
          <Route exact path="/support/:categories" element={ <Support /> } />
          <Route exact path="/*" element={ <NotFound /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
