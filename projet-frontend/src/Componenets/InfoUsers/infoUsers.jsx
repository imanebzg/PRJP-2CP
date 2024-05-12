import React from 'react'
import CompanyCount from '../NumberUsers/numberUsers'
import CompanyManager from '../CompantManager/company_manager'
import "./info.css"
export default function infoUsers() {
  return (
    
    <div className='inf'>
       <div className="title"><p>Informations sur l'utilisateur</p></div>
        <CompanyCount/>
        <CompanyManager/>
    </div>
  )
}
