import React from 'react';
import Securite from './Securite';

function SecuritePage({ companyId }) {
    let Id = localStorage.getItem('userEmail')
    console.log("id securitepage",Id)
    return (
    <div>
      <Securite companyId={Id} />
    </div>
  );
}

export default SecuritePage;
