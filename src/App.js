import React from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Noted from './Components/Noted';
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <Router>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noted" element={<Noted />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

