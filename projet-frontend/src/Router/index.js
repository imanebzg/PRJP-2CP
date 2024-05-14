import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Entrp from "../Componenets/Info_entreprise/Info_entreprise";
import Notif from "../Componenets/Notifications/Notifications";
import Securite from "../Componenets/Securite/Securite";
import Supprimer from "../Componenets/Supprimer/Supprimer";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/start" element={<Page1 />} />
        <Route path="/espace-de-travail" element={<Page2 />} />
        <Route path="/gestion-de-comptes" element={<Page3 />} />
        <Route path="/inviter-utilisateur" element={<Page4 />} />
        <Route path="/user-space" element={<Page5 />} />
        <Route path="/Notification" element={<Notif/>} />
        <Route path="/Info_entreprise" element={<Entrp/> } />
        <Route path='/Securite' element={<Securite />} />
        <Route path="/Sup" element={<Supprimer/> } />
        <Route path="/Sup" element={<Supprimer/> } />
      </Routes>
    </Router>
  );
}
