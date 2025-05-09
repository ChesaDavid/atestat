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
import Logout from './pages/Logout';
import Alert from './components/Alert';
import Todo from './pages/Todo';
import Contabil from './pages/Contabil';
import Favorites from './pages/Favorites';
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';
import Error from './pages/404';
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
          <Route path='/logout' element={<Logout/>}></Route>
          <Route path='/todo' element={<Todo/>}></Route>
          <Route path='/contabil' element={<Contabil/>}></Route>
          <Route path='/fav' element={<Favorites/>}></Route>
          <Route path='/about' element={<Aboutus/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
        <Buttonup />
        <Footer className=""/>
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
