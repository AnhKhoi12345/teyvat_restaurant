import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Discount from './pages/Discount';
import News from './pages/News';
import Contact from './pages/Contact';
import Header from './component/Header';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App" id="body">
      <div className="page">
        <Header />
        {/* <Navigate from="/home" to="/" exact={true} /> */}
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/home" element={<Home />} exact />
          <Route path="/menu" element={<Menu />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/discount" element={<Discount />} exact />
          <Route path="/news" element={<News />} exact />
          <Route path="/contact" element={<Contact />} exact />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
