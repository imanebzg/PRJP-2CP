import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "../Componenets/page1/page11/page11";
import Page2 from "../Componenets/page1/page12/page12";
import Page3 from "../Componenets/page1/page13/page13";
import Page4 from "../Componenets/page1/page14/page14";
import Page5 from "../Componenets/page1/page15/page15";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/start" element={<Page1 />} />
        <Route path="/espace-de-travail" element={<Page2 />} />
        <Route path="/gestion-de-comptes" element={<Page3 />} />
        <Route path="/inviter-utilisateur" element={<Page4 />} />
        <Route path="/user-space" element={<Page5 />} />
      </Routes>
    </Router>
  );
}
