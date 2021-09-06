import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store';
import {modalActiveDispatcher} from '../../../../redux/dispatchers/dispatcher';

export const Statistic: React.FunctionComponent = () => {
    const {statisticGame} = useSelector((state: RootState) => state);


    return (
        <>
            <p>Статистика</p>
            <ul>{statisticGame.map(item => <li>{item}</li>)}</ul>
            {/*<button onClick={()=> statisticGameDispatcher([])}>очистить статистику</button>*/}
            <button onClick={() => modalActiveDispatcher('')}>закрыть</button>
        </>
    )
}