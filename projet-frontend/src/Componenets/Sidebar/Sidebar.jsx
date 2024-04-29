import React, { useState } from 'react';
import './sidebar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineHome, AiFillSetting, AiOutlineFile, AiOutlineFileDone, AiOutlineFileText, AiOutlineQuestion } from 'react-icons/ai';
import { TbLayoutDashboard } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import { BsFillBookFill } from 'react-icons/bs';
function ReactSideBar() {
    const [show, setShow] = useState(false);
    const [showDashboardSubMenu, setShowDashboardSubMenu] = useState(false);

    const toggleSidebar = () => {
        setShow(!show);
        if (!show) {
            setShowDashboardSubMenu(false);
        }
    };

    const toggleDashboardSubMenu = () => {
        setShowDashboardSubMenu(!showDashboardSubMenu);
    };

    return (
        <div className="page-container">
            <div className={show ? 'Bar move-right' : 'Bar'}>
                <div className={show ? 'sidebar1' : 'sidebar'}>
                <ul>
                    <div className='main' onClick={toggleSidebar}>
                        <GiHamburgerMenu className='icon' />
                    </div>
                    <li>
                        <AiOutlineHome className='icon' />
                        {show ? "" : <h2>Mon bilan</h2>}
                    </li>
                    <li>
                        <AiOutlineFileText className='icon' />
                        {show ? "" : <h2>Mes données</h2>}
                    </li>
                    <li>
                        <AiOutlineQuestion className='icon' />
                        {show ? "" : <h2>F&Q</h2>}
                    </li>
                    <li>
                        <TbLayoutDashboard className='icon' onClick={toggleDashboardSubMenu} />
                        {show ? "" : <h2>Dashboard</h2>}
                        {showDashboardSubMenu && (
                            <ul className="sub-menu">
                                <li>Sub Menu Item 1</li>
                                <li>Sub Menu Item 2</li>
                                {/* Ajoutez d'autres éléments de sous-menu ici */}
                            </ul>
                        )}
                    </li>
                    <li>
                        <CgProfile className='icon' />
                        {show ? "" : <h2>My Profile</h2>}
                    </li>
                    <li>
                        <AiFillSetting className='icon' />
                        {show ? "" : <h2>Settings</h2>}
                    </li>
                    <li>
                        <BsFillBookFill className='icon' />
                        {show ? "" : <h2>About us</h2>}
                    </li>
                </ul>
            </div>
        </div>
        </div>
    );
}

export default ReactSideBar;
