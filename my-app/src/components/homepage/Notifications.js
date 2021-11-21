import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

import { BiTrendingUp } from 'react-icons/bi';


export const Notifications = ({ submenu }) => {
    const context = useContext(GlobalContext)

    console.log(context);

    return (
        <>
            <ul className={`dropdown-menu drop-notification ${submenu === 0 ? 'hide' : 'show'}`} aria-labelledby="navbarDropdownMenuLink">
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
        </>
    )
}
