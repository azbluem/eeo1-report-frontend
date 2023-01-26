import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/pages/about'
import Contact from './components/pages/contact'
import Donate from './components/pages/donate'
import Findings from './components/pages/findings'
import Home from './components/pages/index'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/eeo1-report-frontend' element={<Home/>} />
        <Route path='/eeo1-report-frontend/about' element={<About/>} />
        <Route path='/eeo1-report-frontend/findings' element={<Findings/>} />
        <Route path='/eeo1-report-frontend/donate' element={<Donate/>} />
        <Route path='/eeo1-report-frontend/contact' element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
