import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Calculator from './pages/Calculator';
import Footer from './components/Footer';
import Login from './pages/Login';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/calculator' element={<Calculator/>} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
