import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Calculator from './pages/Calculator';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Resources from './pages/Resources';
import Buttonup from './components/Buttonup';
import Course from './pages/Course';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/calculator' element={<Calculator/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/resources' element={<Resources />} />       
          <Route path='/course' element={<Course />}></Route>
        </Routes>
        <Buttonup />
        <Footer />
      </Router>
  );
}
const DynamicBackground = ({ children }) => {
  const location = useLocation();
  console.log(location.pathname);
  React.useEffect(() => {
    if (location.pathname === "/login") {
      document.body.style.background = 'blue';
    } else {
      document.body.style.background = ''; 
    }
  }, [location]);

  return <>{children}</>;
};

export default App;
