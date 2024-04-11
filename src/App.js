import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import News from './pages/News';
import Contact from './pages/Contact';
import Header from './component/Header';
import Footer from './component/Footer';
import Event from './pages/Event';
import Navbar from './component/Navbar';
import MenuItem from './pages/MenuItem';
import MenuDelivery from './pages/MenuDelivery';
function App() {
  return (
    <div className="App" id="body">
      <div className="page">
        <Navbar />
        {/* <Header /> */}
        {/* <Navigate from="/home" to="/" exact={true} /> */}
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/home" element={<Home />} exact />
          <Route path="/menu" element={<Menu />} exact />
          <Route path="/menu/:id" element={<MenuItem />} exact />
          <Route path="/menu/delivery" element={<MenuDelivery />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/event" element={<Event />} exact />
          <Route path="/news" element={<News />} exact />
          <Route path="/contact" element={<Contact />} exact />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
