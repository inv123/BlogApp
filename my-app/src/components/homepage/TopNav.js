import React from 'react';
import avatar from '../../images/avatar.jpg';
import { AiFillCaretDown } from 'react-icons/ai';
import { BsBellFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiTrendingUp } from 'react-icons/bi';

import { BiUser } from 'react-icons/bi';
import { IoMdSettings } from 'react-icons/io';
import { BsFolder2Open } from 'react-icons/bs';
import { GrTransaction } from 'react-icons/gr';
import { AiOutlinePoweroff } from 'react-icons/ai';


export const TopNav = () => {

    //Put different padding on Count notification
    return (
        <>
            <div className='top-nav'>
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
                                <li className="nav-item  nav-notification">
                                    <div className='notification'>
                                        <BsBellFill />
                                        <div className='notification-count'>
                                            <p>22+</p>
                                        </div>
                                    </div>
                                    <ul className="dropdown-menu drop-notification hide" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                <div className='not-box'>
                                                    <div className='not-icon'><BiTrendingUp /></div>
                                                    <div className='not-content'>
                                                        <h6>analitic</h6>
                                                        <p>Your website’s active users count increased by<span className='green'> 28%</span> in the last week. Great job!</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li style={{ padding: '10px 0' }}>
                                            <a className='dropdown-item' href='#' style={{ padding: '10px 0', background: '#ccc' }}>
                                                <h6 style={{ textAlign: 'center' }}>View all notifications</h6>
                                            </a>
                                        </li>

                                    </ul>
                                </li>
                                <li className="nav-item dropdown nav-user">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={avatar}></img>
                                        <p>Username</p>
                                        <AiFillCaretDown />
                                    </a>
                                    <ul className="dropdown-menu hide" aria-labelledby="navbarDropdownMenuLink">
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
