import React, {useEffect, useState} from 'react';
import './index.scss';
import {useSelector} from 'react-redux';
import {
    cellDispatcher,
    sizeDispatcher,
    startPositionDispatcher,
    positionMatrixDispatcher,
    btnDisableDispatcher, arrowDispatcher, resultDispatcher, userCellDispatcher
} from '../../redux/dispatchers/dispatcher';
import {RootState} from '../../redux/store';
import {Cell} from './cell/Cell';


export const Playground: React.FunctionComponent = () => {
    const {size} = useSelector((state: RootState) => state);
    const [btnText, setBtnText] = useState('начать игру');


    useEffect(() => {
        sizeDispatcher(6);

    }, [])


    let cells: number[] = [];
    for (let i = 1; i < size + 1; i++) {
        for (let j = 0; j < size; j++) {
            const startPositionMatrix = i * 10 + j
            cells.push(startPositionMatrix);
        }

    }


    const startGame = () => {
        resultDispatcher('');
        arrowDispatcher('text');
        userCellDispatcher(0);
        setBtnText('начать заново');
        btnDisableDispatcher(false);
        const position = Math.floor(Math.random() * (size * size));
        let counter = 0;
        for (let i = 0; i < cells.length; i++) {
            if (counter === position) {
                startPositionDispatcher(cells[i]);
                positionMatrixDispatcher(cells[i]);
            }
            counter++;
        }
        cellDispatcher(cells);

    };

    const stylePlayground = {
        maxWidth: 100 * size + 4 * size + 'px',
    }

    return (
        <>
            <div className='btnStart'><button onClick={startGame}>{btnText}</button></div>
            <div className={'playground'} style={stylePlayground}>
                {cells.map((item, index) => <Cell key={index + 100} item={item}/>)}
            </div>
        </>
    )
}