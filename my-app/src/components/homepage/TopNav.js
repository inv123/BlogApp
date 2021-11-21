import React, { useState } from 'react';
import avatar from '../../images/avatar.jpg';
import { AiFillCaretDown } from 'react-icons/ai';
import { BsBellFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';

import { BiUser } from 'react-icons/bi';
import { IoMdSettings } from 'react-icons/io';
import { BsFolder2Open } from 'react-icons/bs';
import { GrTransaction } from 'react-icons/gr';
import { AiOutlinePoweroff } from 'react-icons/ai';

import { Notifications } from './Notifications';


export const TopNav = () => {
    const [notificationState, setNotificationState] = useState(0);
    const [userClick, setUserClick] = useState(0);


    //Put different padding on Count notification
    return (
        <>
            <div className='right-block'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">

                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item  search-form">
                                    <form>
                                        <AiOutlineSearch />
                                        <input type='text' placeholder='Search here...'></input>
                                    </form>
                                </li>
                                <li className="nav-item  nav-notification" onClick={() => notificationState === 1 ? setNotificationState(0) : setNotificationState(1)}>
                                    <div className='notification'>
                                        <BsBellFill />
                                        <div className='notification-count'>
                                            <p>22</p>
                                        </div>
                                    </div>

                                    <Notifications submenu={notificationState}/>

                                </li>
                                <li className="nav-item dropdown nav-user" onClick={() => userClick === 0 ? setUserClick(1) : setUserClick(0)}>
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={avatar}></img>
                                        <p>Username</p>
                                        <AiFillCaretDown />
                                    </a>
                                    <ul className={`dropdown-menu ${userClick === 0 ? 'hide' : 'show'}`} aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="#"><BiUser size='16px' style={{ marginRight: '10px' }} /> Profile</a></li>
                                        <li><a className="dropdown-item" href="#"><IoMdSettings size='16px' style={{ marginRight: '10px' }} />Settings</a></li>
                                        <li><a className="dropdown-item" href="#"><BsFolder2Open size='16px' style={{ marginRight: '10px' }} />Files</a></li>
                                        <li><a className="dropdown-item" href="#"><GrTransaction size='16px' style={{ marginRight: '10px' }} />Transactions</a></li>
                                        <li style={{ borderTop: '1px solid #ccc', marginTop: '15px' }} ><a className="dropdown-item logout-btn" href="#"><AiOutlinePoweroff size='16px' color='red' style={{ marginRight: '10px' }} /><span className='red'>Logout</span></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
