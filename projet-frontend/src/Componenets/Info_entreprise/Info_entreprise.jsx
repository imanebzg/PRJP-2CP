import React from 'react';
import EditCompany from './EditCompany';
import Sidebar from '../Sidebar/Sidebar'
function CompanyProfilePage({ companyId }) {
  let Id = localStorage.getItem('userEmail')
  return (
    <div>
      <Sidebar/>
      <EditCompany companyId={Id} />
    </div>
  );
}

export default CompanyProfilePage;
