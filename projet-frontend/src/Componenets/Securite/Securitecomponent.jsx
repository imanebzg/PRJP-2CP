import React from 'react';
import Securite from './Securite';

function SecuritePage({ companyId }) {
    let Id = localStorage.getItem('userEmail')
    return (
    <div>
      <Securite companyId={Id} />
    </div>
  );
}

export default SecuritePage;
