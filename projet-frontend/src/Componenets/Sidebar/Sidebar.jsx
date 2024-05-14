import React, { useState } from 'react';
import './sidebar.css';

import { Link } from 'react-router-dom';
import { AiOutlineHome, AiFillSetting, AiOutlineQuestion, AiOutlineQrcode, AiOutlineBell, AiFillCalculator } from 'react-icons/ai';


function ReactSideBar() {
    const [show, setShow] = useState('sidebar');
    const [showDashboardSubMenu, setShowDashboardSubMenu] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const toggleSidebar = () => {
        setShow(!show);
        if (!show) {
            setShowDashboardSubMenu(false);
            setShowSubMenu(false);
        }
    };

    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };

    const handleLogOut = () => {
        // Perform any logout-related actions here, such as clearing user data, removing tokens, etc.
       
        localStorage.removeItem('authToken'); // Remove access token from local storage
        localStorage.removeItem('userData'); // Remove user data from local storage
        window.location.href = '/'; // Redirect to the login page
      };
     

      const handleCheckboxClick = () => {
          setIsChecked(!isChecked);
      };
  
      
    return (
        <div className='bar'>
            <div className={show ? 'sidebar1' : 'sidebar'}>
                <div class="nav"> 
                
                    <input type="checkbox" id="checkbox" className={show ? 'main' : 'main1'} onClick={toggleSidebar} />
            <label htmlFor="checkbox" className="toggle">
                <div className="bars" id="bar1"></div>
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
            </label>
                  
                    <div className='item'>
                        <AiOutlineHome className={show ? 'icon11' : 'icon'} />
                        <div className='Dashboard'>
                            {show ? "" : <Link to='/' className='link'><h3>Home</h3></Link>  }
                        </div>
                    </div>
                    <div className='item'>
                        <AiFillCalculator className={show ? 'icon11' : 'icon'} />
                        <div className='Dashboard'>
                          
{show ? "" :<Link to='/second-page'className="link"><h3>Calculer</h3></Link> }
                        </div>
                    </div>
                   
                    <div className='item'>
                        <AiFillSetting className={show ? 'icon11' : 'icon'} />
                        <div className='Dashboard' onClick={toggleSubMenu}>
                            {show ? '' : <h3>Parametres</h3>}
                        </div></div>
                        {showSubMenu && (
                            <div className="sub-menu">
                                <Link to ='/first-page'className='link'> <li>Mon compte</li> </Link>
                                <Link to ='/' className='link'><li>Avis</li>   </Link>
                               
                            </div>
                        )}
                    
                    <div className='item2' style={{ display: !showSubMenu && !show ? 'flex' : 'none' }}>
    
   
        {show ? "" :  <button onClick={handleLogOut}>
  
  <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  
  <div class="text1">Logout</div>
</button>}
    </div>
</div>

            </div>
        </div>
    );
}

export default ReactSideBar;



