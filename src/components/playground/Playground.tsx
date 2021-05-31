import React, {useEffect} from 'react';
import './index.scss';
import start from '../../images/start-button.png';
import {useSelector} from 'react-redux';
import {
    setCellDispatcher,
    setSizeDispatcher,
    setStartPositionDispatcher,
    setPositionMatrixDispatcher
} from '../../redux/dispatchers/dispatcher';
import {RootState} from '../../redux/store';

export const Playground = () => {
    const {size, startPosition} = useSelector((state: RootState) => state);


    useEffect(() => {
        setSizeDispatcher(3);

    }, [])


    let cells: number[] = [];
    for (let i = 1; i < size + 1; i++) {
        for (let j = 0; j < size; j++) {
            const startPositionMatrix = i * 10 + j
            cells.push(startPositionMatrix);
        }

    }


    const startGame = () => {
        const position = Math.floor(Math.random() * (size * size));
        let counter = 0;
        for (let i = 0; i < cells.length; i++) {
            if (counter === position) {
                setStartPositionDispatcher(cells[i]);
                setPositionMatrixDispatcher(cells[i]);
            }
            counter++;
        }
        setCellDispatcher(cells);
    };

    const stylePlayground = {
        width: 100 * size + 4 * size + 'px'
    }
    return (
        <>
            <button onClick={startGame}>начать игру</button>
            <div className={'playground'} style={stylePlayground}>
                {cells.map((item) => {
                    if (item === startPosition) {
                        return <button className='cell' key={item}><img className='cellImg' src={start}
                                                                        alt='START'/></button>
                    }
                    return <button className='cell' key={item}/>
                })}
            </div>
        </>
    )
}