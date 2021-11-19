import React,{ useState } from 'react';
import logo from '../images/logo.svg'
import { RiPencilFill } from 'react-icons/ri';
import { MdPostAdd } from 'react-icons/md';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { MdError } from 'react-icons/md'

export const SideMenu = () => {
    const [navActive, setNavActive] = useState(1);
    const [navHover, setNavHover] = useState(0);

  

    return (
        <aside className='aside-menu'>
            <a href='/' className='logo'>
                <img src={logo}></img>
            </a>
            <nav>
                <ul className="nav justify-content-center">

                    <li className={`nav-item ${(navActive === 1 || navHover === 1) && 'active-border'}`} onMouseOver={() =>setNavHover(1)} onMouseOut={() =>setNavHover(0)} onClick={() => setNavActive(1)}>
                        <a className={`nav-link ${(navActive === 1 || navHover === 1) && 'active'}`} aria-current="page" href="#"><RiPencilFill  />Dashboard</a>
                    </li>

                    <li className={`nav-item ${(navActive === 2 || navHover === 2) && 'active-border'}`} onMouseOver={() =>setNavHover(2)} onMouseOut={() =>setNavHover(0)} onClick={() => setNavActive(2)}>
                        <a className={`nav-link ${(navActive === 2 || navHover === 2) && 'active'}`} aria-current="page" href="#"><BsFillBookmarkFill />Active</a>
                    </li>

                    <li className={`nav-item ${(navActive === 3 || navHover === 3) && 'active-border'}`} onMouseOver={() =>setNavHover(3)} onMouseOut={() =>setNavHover(0)} onClick={() => setNavActive(3)}>
                        <a className={`nav-link ${(navActive === 3 || navHover === 3) && 'active'}`} aria-current="page" href="#"><MdPostAdd />Add New Post</a>
                    </li>

                    <li className={`nav-item ${(navActive === 4 || navHover === 4) && 'active-border'}`} onMouseOver={() =>setNavHover(4)} onMouseOut={() =>setNavHover(0)} onClick={() => setNavActive(4)}>
                        <a className={`nav-link ${(navActive === 4 || navHover === 4) && 'active'}`} aria-current="page" href="#"><BiUser />User Profile</a>
                    </li>

                    <li className={`nav-item ${(navActive === 5 || navHover === 5) && 'active-border'}`} onMouseOver={() =>setNavHover(5)} onMouseOut={() =>setNavHover(0)} onClick={() => setNavActive(5)}>
                        <a className={`nav-link ${(navActive === 5 || navHover === 5) && 'active'}`} aria-current="page" href="#"><MdError />Errors</a>
                    </li>   
                    
                </ul>
            </nav>
        </aside>
    )
}
