
import './App.css';
import LandingPage from './Pages/Landingpage/Landingpage';
import Secondpage from './Pages/second-page/second_page';
import Thirdpage from './Pages/third-page/thirs-page';
import Firstpage from './Pages/first-page/firstpage';
import Adminpage from './Pages/admin-page/admin_page';
import Hist from './Pages/history-page/history';

import {BrowserRouter as Router, Routes, Route, Link}from 'react-router-dom';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' exact element= {<div className='App'><LandingPage/></div> } />
          <Route path='second-page' element={  <div className='page'> <Secondpage /></div>} />
          <Route path='third-page' element={  <div className='page'> <Thirdpage /></div>} />
          <Route path='first-page' element={  <div className='page'> <Firstpage /></div>} />
          <Route path='admin-page' element={  <div className='page'> <Adminpage /></div>} />
          <Route path='hist-page' element={  <div className='page'> <Hist /></div>} />
        </Routes>
      </main>
    </Router>

  );
}

export default App;
