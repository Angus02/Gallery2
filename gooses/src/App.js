import React from 'react';
import NavBar from './components/NavBar';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Geese from './components/pages/Geese'
import Shallow from './components/pages/Shallow'
import Geesemint from './components/pages/Geesemint';
import ComingSoon from './components/pages/ComingSoon';
// import LogRocket from 'logrocket';
// import setupLogRocketReact from 'logrocket-react'


function App() {
  // LogRocket.init('2xlwjx/goos')
  // setupLogRocketReact(LogRocket)
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/geese' element= {<Geese />} />
          <Route path='/shallow' element={<Shallow />} />
          <Route path='/geesemint' element={<Geesemint />} />
          <Route path='/comingsoon' element={<ComingSoon />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
