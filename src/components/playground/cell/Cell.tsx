import start from '../../../images/start-button.png';
import finish from '../../../images/finish.png';
import cellWinner from '../../../images/cellWinner.png';
import cellLosing from '../../../images/cellLosing.png';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {
    setBtnDisableDispatcher,
    setResultDispatcher, setUserCellDispatcher,
} from '../../../redux/dispatchers/dispatcher';

interface CellProps {
    item: number,
}

export const Cell = ({item}: CellProps) => {
    const {startPosition, btnDisable, positionMatrix, userCell} = useSelector((state: RootState) => state);


    const resultGame = (event: any) => {
        setUserCellDispatcher(parseInt(event.target.id))
        setBtnDisableDispatcher(true);
        if (positionMatrix + '' === event.target.id) {
            setResultDispatcher('winner')
        } else {
            setResultDispatcher('losing')
        }

    }


    let btnImg = <div/>;
    if (item === startPosition) {
        btnImg = <img className='cellImg' src={start}
                      alt='START'/>
    }
    if (userCell !== 0) {
        if (userCell !== positionMatrix) {
            if (item === userCell) {
                btnImg = <img className='cellImg' src={cellLosing}
                              alt='проигрыш'/>
            }
            if (item === positionMatrix) {
                btnImg = <img className='cellImg' src={finish}
                              alt=''/>
            }
        }
        if (userCell === positionMatrix && item === positionMatrix) {
            btnImg = <img className='cellImg' src={cellWinner}
                          alt='победа'/>
        }
    }


    return (<button id={item + ''} disabled={btnDisable} onClick={resultGame} className='cell'
                    key={item}>{btnImg}</button>)

}