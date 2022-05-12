import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';

const App = () => {
     return (
      <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/about" element={<About />} /> 
    </Routes>
  );
}

export default App;
