import React from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import avatar from '../images/avatar.jpg';
import { AiFillCaretDown } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { IoIosSettings } from 'react-icons/io';
import { AiFillFile } from 'react-icons/ai';
import { CgMenuRightAlt } from 'react-icons/cg'

export const TopBar = () => {
    return (
        <div className='right-top-nav'>

            <form>
                <input type='text' value='' placeholder='Search...'></input>
            </form>

            <div className='notification'>
                <AiOutlineBell 
                    style={{ color: '#333', width: '1.3em', height: '1.3em'}}
                />
                <div className='notification-count'></div>
            </div>

            <div className='user-menu'>
                <img src={avatar}></img>
                <p>User</p>
                <AiFillCaretDown />
                <ul className='drop-down'>

                    <li>
                        <a href='#'>
                            <BiUser />
                            Profile
                        </a>
                    </li>

                    <li>
                        <a href='#'>
                            <IoIosSettings />
                            Edit Profile
                        </a>
                    </li>

                    <li>
                        <a href='#'>
                            <AiFillFile />
                            Files
                        </a>
                    </li>

                    <li>
                        <a href='#'>
                            <CgMenuRightAlt />
                            Transactions
                        </a>
                    </li>

                </ul>
            </div>
            
        
        </div>
        
    )
}
