import React from 'react';
import { Charts } from './Charts';


export const Dashboard = () => {
    return (
        <>
            <div className='board-title'>
                <h6>dashboard</h6>
                <h3>Overview</h3>
                <Charts />
            </div>
        </>
    )
}
