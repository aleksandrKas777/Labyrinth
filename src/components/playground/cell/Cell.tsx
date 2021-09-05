import start from '../../../images/start-button.png';
import finish from '../../../images/finish.png';
import cellWinner from '../../../images/cellWinner.png';
import cellLosing from '../../../images/cellLosing.png';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {
    btnDisableDispatcher,
    resultDispatcher, userCellDispatcher, statisticGameDispatcher
} from '../../../redux/dispatchers/dispatcher';

interface CellProps {
    item: number,
}

export const Cell = ({item}: CellProps) => {
    const {
        startPosition,
        btnDisable,
        positionMatrix,
        userCell,
        statisticGame,
    } = useSelector((state: RootState) => state);


    const resultGame = (event: any) => {
        userCellDispatcher(parseInt(event.target.id))
        btnDisableDispatcher(true);

        const resultGame = positionMatrix + '' === event.target.id ? 'winner' : 'losing';

        resultDispatcher(resultGame);


        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = String(today.getFullYear());
        const hour = String(today.getHours());
        const minutes = String(today.getMinutes()).padStart(2, '0');
        const dateGame = day + '.' + month + '.' + year + ' ' + hour + ':' + minutes + '  ' + (resultGame === 'winner' ? 'Победа' : 'Поражение');

        // запись статистики в состояние
        const resultsAllGames = statisticGame.slice();
        resultsAllGames.unshift(dateGame);
        statisticGameDispatcher(resultsAllGames);
    }


    let btnImg = <div/>;
    if (item === startPosition) {
        btnImg = <img className="cellImg" src={start}
                      alt="START"/>
    }
    if (userCell !== 0) {
        if (userCell !== positionMatrix) {
            if (item === userCell) {
                btnImg = <img className="cellImg" src={cellLosing}
                              alt="проигрыш"/>
            }
            if (item === positionMatrix) {
                btnImg = <img className="cellImg" src={finish}
                              alt=""/>
            }
        }
        if (userCell === positionMatrix && item === positionMatrix) {
            btnImg = <img className="cellImg" src={cellWinner}
                          alt="победа"/>
        }
    }


    return (<button id={item + ''} disabled={btnDisable} onClick={resultGame} className="cell"
                    key={item}>{btnImg}</button>)

}