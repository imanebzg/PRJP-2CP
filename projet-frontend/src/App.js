import React, { useEffect, useState } from 'react';
import PrivateRoute from './PrivateRoute';
import './App.css';
import LandingPage from './Pages/Landingpage/Landingpage';
import Secondpage from './Pages/second-page/second_page';
import Thirdpage from './Pages/third-page/thirs-page';
import Firstpage from './Pages/first-page/firstpage';
import SignIn from './Componenets/Signup/signup';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';


function App() {
  const authToken = localStorage.getItem('authToken');
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="App"><LandingPage /></div>} />
        {authToken ? (
          <>
            <Route path="/first-page" element={<Firstpage />} />
            <Route path="/second-page" element={<Secondpage />} />
            <Route path="/third-page" element={<Thirdpage />} />
          </>
        ) : (
          <Route path="*" element={<div className="App"><LandingPage /></div>} />
        )}
  
      </Routes>
    </Router>
  );
}
export default App;