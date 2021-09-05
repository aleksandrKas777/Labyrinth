import React from 'react';
import './index.scss';
import {modalActiveDispatcher} from '../../redux/dispatchers/dispatcher';

export const Header = () => {

    return (
        <header>
            <nav>
                <ul className="nav_ul">
                    <li className="nav_item" onClick={() => {
                        modalActiveDispatcher('statistic')
                    }}>Статистика
                    </li>
                    <li className="nav_item" onClick={() => { modalActiveDispatcher('settings')}}>Настройки игры</li>
                </ul>
            </nav>

            <div className="title"><h1>Лабиринт</h1></div>

        </header>
    )
}