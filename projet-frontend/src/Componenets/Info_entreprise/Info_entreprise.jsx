import React from 'react';
import EditCompany from './EditCompany';

function CompanyProfilePage({ companyId }) {
  let Id = localStorage.getItem('userEmail')
  return (
    <div>
      <EditCompany companyId={Id} />
    </div>
  );
}

export default CompanyProfilePage;
