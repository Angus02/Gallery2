import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Geese from './components/pages/Geese'
import Shallow from './components/pages/Shallow'
import Geesemint from './components/pages/Geesemint';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/geese' element= {<Geese />} />
          <Route path='/shallow' element={<Shallow />} />
          <Route path='/geesemint' element={<Geesemint />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
