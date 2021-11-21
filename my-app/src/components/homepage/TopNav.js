import React from 'react';
import avatar from '../../images/avatar.jpg';
import { AiFillCaretDown } from 'react-icons/ai';
import { BsBellFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai'

export const TopNav = () => {

    //Put different padding on Count notification
    return (
        <>
            <div class='top-nav'>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">

                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item  search-form">
                                    <form>
                                        <AiOutlineSearch />
                                        <input type='text' placeholder='Search here...'></input>
                                    </form>
                                </li>
                                <li class="nav-item  nav-notification">
                                    <div className='notification'>
                                        <BsBellFill />
                                        <div class='notification-count'>
                                            <p>22+</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item dropdown nav-user">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={avatar}></img>
                                        <p>Username</p>
                                        <AiFillCaretDown />
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
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
