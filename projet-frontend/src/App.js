
import './App.css';
import LandingPage from './Pages/Landingpage/Landingpage';
import Secondpage from './Pages/second-page/second_page';
import Thirdpage from './Pages/third-page/thirs-page';
import Adminpage from './Pages/admin-page/admin_page';
import Hist from './Pages/history-page/history';
import Notif from './Componenets/Notifications/Notifications'
import Entrp from './Componenets/Info_entreprise/Info_entreprise'
import Securite from './Componenets/Securite-admin/Securitecomponent'
import Securite2 from './Componenets/Securite-user/Securitecomponent'

import Supprimer from './Componenets/Supprimer/Supprimer'
import Supprimerbdd from './Componenets/Delete_bdd/deleteBDD'
import Infusers from './Componenets/InfoUsers/infoUsers'
import Ajouter from './Componenets/Add_bdd/addBDD'
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
        <Route path="/" exact element= {<div className='App'><LandingPage/></div> } />
        {authToken ? (
          <>
            
            <Route path="/second-page"  element={  <div className='page'> <Secondpage /></div>} />
            <Route path="/third-page" element={  <div className='page'> <Thirdpage /></div>} />
            <Route path='/admin-page' element={  <div className='page'> <Adminpage /></div>} />
            <Route path='/hist-page' element={  <div className='page'> <Hist /></div>} />

        
            <Route path="/Notification" element={<Notif/>} />
            <Route path="/Supprimer" element={<Supprimer/> } />
            <Route path="/Ajouter-bdd" element={<Ajouter/>} />
        <Route path="/Info_entreprise" element={<Entrp/> } />
 
        <Route path='/Securite-admin' element={<Securite />} />
        <Route path='/Securite' element={<Securite2 />} />
        <Route path="/Supprimer-admin" element={<Supprimerbdd/> } />
        <Route path="/info-users" element={<Infusers/> } />

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
