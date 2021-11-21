import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { SingleNotification } from './SingleNotification';




export const Notifications = ({ submenu }) => {
    const {notifications} = useContext(GlobalContext)
    console.log(notifications);

    return (
        <>
            <ul className={`dropdown-menu drop-notification ${submenu === 0 ? 'hide' : 'show'}`} aria-labelledby="navbarDropdownMenuLink">
                
                {notifications.map(x => <SingleNotification key={x.id} category={x.notification.category} number={x.notification.value} seen={x.state} id={x.id}/>)}
                

                <li style={{ padding: '10px 0' }}>
                    <a className='dropdown-item' href='#' style={{ padding: '10px 0', background: '#ccc' }}>
                        <h6 style={{ textAlign: 'center' }}>View all notifications</h6>
                    </a>
                </li>

            </ul>
        </>
    )
}
