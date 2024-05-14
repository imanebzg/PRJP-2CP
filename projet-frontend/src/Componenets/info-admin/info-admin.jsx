import React from 'react';
import EditCompanyadmin from './editcompanyadmin';

function CompanyProfilePage({ companyId }) {
  let Id = localStorage.getItem('userEmail')
  return (
    <div>
      <EditCompanyadmin companyId={Id} />
    </div>
  );
}

export default CompanyProfilePage;
