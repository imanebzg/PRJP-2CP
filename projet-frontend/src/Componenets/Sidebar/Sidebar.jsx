import React, { useState } from 'react';
import './sidebar.css';

import { Link } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineHome, AiFillSetting, AiOutlineLogout, AiOutlineQuestion, AiOutlineQrcode, AiOutlineBell } from 'react-icons/ai';


function ReactSideBar() {
    const [show, setShow] = useState(false);
    const [showDashboardSubMenu, setShowDashboardSubMenu] = useState(false);

    const toggleSidebar = () => {
        setShow(!show);
        // Si la barre latérale est fermée, on réinitialise également l'état du sous-menu du tableau de bord
        if (!show) {
            setShowDashboardSubMenu(false);
        }
    };

    const toggleDashboardSubMenu = () => {
        setShowDashboardSubMenu(!showDashboardSubMenu);
    };
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(!isActive);
    };
  
    return (
        <div className='bar'>
            <div className={show ? 'sidebar1' : 'sidebar'}>
            <nav class="nav"> 
                <ul>
                    <div className='main' onClick={toggleSidebar}>
                        <GiHamburgerMenu className='icon' />
                    </div>
                    <li>
                    <div className='Dashboard2'>
                    <div className='Dashboard2'>

                        <AiOutlineHome className='icon' />
                        {show ? "" : <Link to='/landingpage'><li>Home</li></Link> }
                        </div>
                        </div>
                    </li>
                    <li>
                    <div className='Dashboard2'>
                    <div className='Dashboard2'>
                        <AiOutlineQrcode className='icon' />
                        {show ? "" :<li>Calculer</li> }
                        </div>
                        </div>
                    </li>
                    <li>
                    <div className='Dashboard2'>
                    <div className='Dashboard'>
                        <AiOutlineBell className='icon' />
                        {show ? "" :        <Link to="/Notification">  <li>Notification</li></Link >    }
                        </div>
                        </div>
                    </li>
                    <li>
                    <div className={`Dashboard3 ${isActive ? 'active' : ''}`} onClick={handleClick}>
                       <div className='Dashboard4' onClick={toggleDashboardSubMenu}>
                        <AiFillSetting className='icon'/>
                        {show ? "" :    <Link to='/second-page/Securite'> <h2>Parametres</h2>   </Link> }
                        </div>
                        {showDashboardSubMenu && (
                            <ul className="sub-menu">
                           <Link to='/Info_entreprise'>    <li>Mon compte</li>  </Link> 
                           <Link to={'/Sup'}>  <li>Supprimer</li> </Link> 
                               <li>Avis</li> 
                                <li>Language</li>
                            
                            </ul>
                        )}
                        </div>
                    </li>
                   
                </ul>

                <li>
                    <div className='Dashboard2'>
                    <div className='Dashboard'>
                        <AiOutlineLogout className='icon' />
                        {show ? "" : <h2>Log Out</h2>}
                        </div>
                        </div>
                    </li>
                </nav>

            </div>
        </div>
    );
}

export default ReactSideBar;
