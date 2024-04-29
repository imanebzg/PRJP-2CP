import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/Landingpage/Landingpage';
import Secondpage from './Pages/second-page/second_page';
import Thirdpage from './Pages/third-page/thirs-page';
import {BrowserRouter , Routes, Route, Link}from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element= {<div className='App'><LandingPage/></div> } />
          <Route path='second-page' element={ <Secondpage />} />
          <Route path='third-page' element={ <Thirdpage />} />
        </Routes>
      </main>
    </BrowserRouter>

  );
}

export default App;
