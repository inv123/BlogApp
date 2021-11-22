import React,{ useContext } from 'react';
import { BiTrendingUp } from 'react-icons/bi';
import { GlobalContext } from '../../context/GlobalContext';

export const SingleNotification = ({ category, number, seen, id}) => {
    const {seeNotification} = useContext(GlobalContext);

   

    return (
        <>
            <li className={seen ? '' : 'not-seen'} onClick={() => seeNotification(id)}>
                <a className="dropdown-item" href="#">
                    <div className='not-box'>
                        <div className='not-icon'><BiTrendingUp /></div>
                        <div className='not-content'>
                            <h6>{category}</h6>
                            <p>Your website’s active users count increased by<span className='green'> {number}%</span> in the last week. Great job!</p>
                        </div>
                    </div>
                </a>
            </li>
        </>
    )
}
