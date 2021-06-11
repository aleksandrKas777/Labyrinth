import React from 'react';
import './index.scss';

export const Header = () => {
    return (
        <header>
            <nav>
                <ul className='nav_ul'>
                    <div>
                        <li className='nav_item li_margin'>О нас</li>
                        <li className='nav_item'>Статистика</li>
                    </div>
                   <div>
                       <li className='nav_item'>Настройки игры</li>
                   </div>
                </ul>
            </nav>

            <div className='title'><h1>Лабиринт</h1></div>

        </header>
    )
}