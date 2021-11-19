import React from 'react';
import { SideMenu } from './components/SideMenu';
import { RightDesktop } from './components/RightDesktop';

export const Homepage = () => {
    return (
        <>
           <div className='flex'>
                <SideMenu />
                <RightDesktop />
           </div>
           
        </>
    )
}
