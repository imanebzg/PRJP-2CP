
import './App.css';
import LandingPage from './Pages/Landingpage/Landingpage';
import Secondpage from './Pages/second-page/second_page';
import Thirdpage from './Pages/third-page/thirs-page';
import Firstpage from './Pages/first-page/firstpage';
import {BrowserRouter as Router, Routes, Route, Link}from 'react-router-dom';

function App() {
  const authToken = localStorage.getItem('authToken');
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
          </>
        ) : (
          <Route path="*" component={() => {handleRouteAccess();}} />
        )}
  
      </Routes>
      </main>
    </Router>

  );
}

export default App;
