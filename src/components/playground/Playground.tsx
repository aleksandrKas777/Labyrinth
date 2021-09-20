import React, {useEffect} from 'react';
import './index.scss';
import {useSelector} from 'react-redux';
import {
    cellDispatcher,
    sizeDispatcher,
    startPositionDispatcher,
    positionMatrixDispatcher,
    btnDisableDispatcher, arrowDispatcher, resultDispatcher, userCellDispatcher, btnStartDispatcher
} from '../../redux/dispatchers/dispatcher';
import {RootState} from '../../redux/store';
import {RowCells} from './rowCells/RowCells';


export const Playground: React.FunctionComponent = () => {
    const {size, btnStart} = useSelector((state: RootState) => state);


    useEffect(() => {
        sizeDispatcher(6);

    }, [])


    let cells: number[] = [];
    let arrCells: number[] = [];
    for (let i = 1; i < size + 1; i++) {
        const startPositionMatrix = i * 10
        cells.push(startPositionMatrix);
        for (let j = 1; j < size + 1; j++) {
            const positionCell = startPositionMatrix + j
            arrCells.push(positionCell);
        }
        console.log(arrCells);
    }


    const startGame = () => {
        resultDispatcher('');
        arrowDispatcher('text');
        userCellDispatcher(0);
        btnStartDispatcher('restart');
        btnDisableDispatcher(false);
        const position = Math.floor(Math.random() * (size * size));

        let counter = 0;
        for (let i = 1; i < arrCells.length + 1; i++) {
            if (counter === position) {
                startPositionDispatcher(arrCells[i]);
                positionMatrixDispatcher(arrCells[i]);
            }
            counter++;
        }
        cellDispatcher(arrCells);

    };

    const stylePlayground = {
        maxWidth: 100 * size + 4 * size + 'px',
    }

    return (
        <>
            <div className="btnStart">
                <button onClick={startGame}>{btnStart === 'start' ? 'начать игру' : 'начать заново'}</button>
            </div>
            <div className={'playground'} style={stylePlayground}>
                {cells.map((item) => <RowCells key={item.toString()} itemRow={item}/>)}
            </div>
        </>
    )
}