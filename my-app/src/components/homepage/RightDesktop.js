import React from 'react';
import { TopNav } from './TopNav';
import { Dashboard } from './Dashboard'

export const RightDesktop = () => {
    return (
        <>
            <div className='right-block'>
                <TopNav />
                <Dashboard />
            </div>
        </>
    )
}
