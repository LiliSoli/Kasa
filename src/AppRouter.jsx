import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Location from './pages/location/Location';
import About from './pages/about/About';
import Error from './pages/error/Error';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <main>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location/:id" element={<Location />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
};

export default AppRouter;
