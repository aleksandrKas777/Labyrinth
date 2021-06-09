import React, {useEffect, useState} from 'react';
import './index.scss';
import start from '../../images/start-button.png';
import {useSelector} from 'react-redux';
import {
    setCellDispatcher,
    setSizeDispatcher,
    setStartPositionDispatcher,
    setPositionMatrixDispatcher,
    setBtnDisableDispatcher, setArrowDispatcher,
} from '../../redux/dispatchers/dispatcher';
import {RootState} from '../../redux/store';


export const Playground = () => {
    const {size, startPosition, positionMatrix, btnDisable} = useSelector((state: RootState) => state);
    const [btnText, setBtnText] = useState('новая игра');

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
    const resultGame = (event: any) => {
        if (positionMatrix + '' === event.target.id) {
            console.log('win')
        } else {
            console.log('no')
        }
    }


    const startGame = () => {
        setArrowDispatcher('text');
        setBtnText('рестарт');
        setBtnDisableDispatcher(false);
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
            <button onClick={startGame}>{btnText}</button>
            <div className={'playground'} style={stylePlayground}>
                {cells.map((item) => {
                    if (item === startPosition) {
                        return <button id={item + ''} disabled={btnDisable} className='cell' onClick={resultGame}
                                       key={item}><img className='cellImg' src={start}
                                                       alt='START'/></button>
                    }
                    return <button id={item + ''} disabled={btnDisable} onClick={resultGame} className='cell'
                                   key={item}/>
                })}
            </div>
        </>
    )
}