import React from 'react';
import { AiOutlineBell } from 'react-icons/ai'

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

            
        </div>
    )
}
