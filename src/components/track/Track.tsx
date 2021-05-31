import React from 'react';
import arrowUp from '../../images/arrow-up.png';
import './index.scss';

export const Track = () => {



    return (
        <div className='track'>
            <img className='arrow' src={arrowUp} alt='up'/>
        </div>
    )
}