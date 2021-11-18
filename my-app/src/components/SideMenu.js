import React from 'react';
import logo from '../images/logo.svg'
import { RiPencilFill } from 'react-icons/ri';
import { MdPostAdd } from 'react-icons/md';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { MdError } from 'react-icons/md'

export const SideMenu = () => {
    return (
        <aside className='aside-menu'>
            <a href='/' className='logo'>
                <img src={logo}></img>
            </a>
            <nav>
                <ul class="nav justify-content-center">

                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><RiPencilFill 
                            style={{ 'padding-right': '10px'}}
                        />Dashboard</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><BsFillBookmarkFill 
                            style={{ 'padding-right': '10px'}}
                        />Active</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><MdPostAdd 
                            style={{ 'padding-right': '10px'}}
                        />Add New Post</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><BiUser 
                            style={{ 'padding-right': '10px'}}
                        />User Profile</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><MdError 
                            style={{ 'padding-right': '10px'}}
                        />Errors</a>
                    </li>   
                    
                </ul>
            </nav>
        </aside>
    )
}
