
import './App.css';
import LandingPage from './Pages/Landingpage/Landingpage';
import Secondpage from './Pages/second-page/second_page';
import Thirdpage from './Pages/third-page/thirs-page';
import Firstpage from './Pages/first-page/firstpage';
import Adminpage from './Pages/admin-page/admin_page';

import {BrowserRouter as Router, Routes, Route, Link}from 'react-router-dom';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' exact element= {<div className='App'><LandingPage/></div> } />
          <Route path='second-page' element={ <Secondpage />} />
          <Route path='third-page' element={ <Thirdpage />} />
          <Route path='first-page' element={ <Firstpage />} />
          <Route path='admin-page' element={ <Adminpage />} />

        </Routes>
      </main>
    </Router>

  );
}

export default App;
