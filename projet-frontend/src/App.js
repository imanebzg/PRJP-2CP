import React from 'react';
import './App.css';
import LandingPage from './Pages/Landingpage/Landingpage';
import Secondpage from './Pages/second-page/second_page';
import Thirdpage from './Pages/third-page/thirs-page';
import Firstpage from './Pages/first-page/firstpage';
import Adminpage from './Pages/admin-page/admin_page';
import Sup from '../src/Componenets/Supprimer/Supprimer';

import {BrowserRouter as Router, Routes, Route, Link}from 'react-router-dom';



const App = () => {
let isAdmin = false; let authToken = false;
isAdmin = localStorage.getItem('isAdmin'); 
authToken = localStorage.getItem('authToken');
const handleRouteAccess = () => {
  window.location.href = '/'; 
};

  return (
    <Router>
       <main>
        <Routes>
        <Route path="/" element={<div className="App"><LandingPage /></div>} />
        {authToken ? (
          <>
            <Route path="/first-page" element={<Firstpage />} />
            <Route path="/second-page" element={<Secondpage />} />
            <Route path="/third-page" element={<Thirdpage />} />
            <Route path="/admin-page" element={<Adminpage />} />
          </>
        ) : (
          <Route path="*" component={() => {handleRouteAccess();}} />
        )}
  
      </Routes>
      </main>
    </Router>
  );
};


export default App;
