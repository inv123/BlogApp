import React from 'react';
import { SideMenu } from './SideMenu';
import { RightDesktop } from './RightDesktop';

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
