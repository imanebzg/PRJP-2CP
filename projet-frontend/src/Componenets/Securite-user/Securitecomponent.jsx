import React from 'react';
import Securite from './Securite';
import Sidebar from '../Sidebar/Sidebar';
function SecuritePage({ companyId }) {
    let Id = localStorage.getItem('userEmail')
    return (
    <div>
      <Sidebar/>
      <Securite companyId={Id} />
    </div>
  );
}

export default SecuritePage;
