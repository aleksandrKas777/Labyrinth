import React from 'react';
import arrowUp from '../../images/arrow-up.png';
import './index.scss';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

export const Track = () => {
    const {startPosition, cells} = useSelector((state: RootState) => state);
    console.log(startPosition);
    console.log(cells);




    return (
        <div className='track'>
            <img className='arrow' src={arrowUp} alt='up'/>
        </div>
    )
}