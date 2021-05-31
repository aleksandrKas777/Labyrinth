import React, {useEffect} from 'react';
import './index.scss';
import start from '../../images/start-button.png';
import {useSelector} from 'react-redux';
import {setSizeDispatcher, setStartCellDispatcher} from '../../redux/dispatchers/dispatcher';
import {RootState} from '../../redux/store';

export const Playground = () => {
    const {size, startCell} = useSelector((state: RootState) => state);



    useEffect(()=>{
        setSizeDispatcher(3);
    }, [])


    const startGame = () => {
        const startPosition = Math.floor(Math.random() * (size * size));
        setStartCellDispatcher(startPosition);
    };




    let cells: number[] = [];
    for (let i = 0; i < size * size; i++) {
        cells.push(i)
    }
    const stylePlayground = {
        width: 100 * size + 4 * size + 'px'
    }
    return (
        <>
            <button onClick={startGame}>начать игру</button>
            <div className={'playground'} style={stylePlayground}>
                {cells.map((item, index) => {
                    if (index === startCell) {
                        return <button className='cell' key={index}><img className='cellImg' src={start}
                                                                         alt='START'/></button>
                    }
                    return <button className='cell' key={index}/>
                })}
            </div>
        </>
    )
}