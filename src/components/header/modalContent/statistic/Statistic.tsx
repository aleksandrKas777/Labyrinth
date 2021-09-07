import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store';
import {
    modalActiveDispatcher,
    statisticGameDispatcher
} from '../../../../redux/dispatchers/dispatcher';

export const Statistic: React.FunctionComponent = () => {
    const {statisticGame} = useSelector((state: RootState) => state);

    const modalClose = () => {
        statisticGameDispatcher([]);
        modalActiveDispatcher('');
    }


    return (
        <>
            <h2>Статистика</h2>
            <ul>{statisticGame.map(item => <li>{item}</li>)}</ul>
            <div id='deleteStatistic' onClick={modalClose}>{statisticGame.length < 1? null: 'очистить'}</div>
            <button onClick={() => modalActiveDispatcher('')}>закрыть</button>
        </>
    )
}