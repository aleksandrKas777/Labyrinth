import React from 'react';
import {modalActiveDispatcher} from '../../../../redux/dispatchers/dispatcher';

export const Settings: React.FunctionComponent = () => {


    return (
        <>
            <h2>Настройки</h2>

            <div className='select'>
                <p className='titleModal'>размер поля</p>
                <select name='selectSize'>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                </select>
            </div>

            <div className='select'>
                <p className='titleModal'>сложность</p>
                <select name='selectSpeed'>
                    <option value='easy'>легко</option>
                    <option value='mid'>средне</option>
                    <option value='hard'>тяжело</option>
                </select>
            </div>

            <div className='btnSettings'>
                <button>сохранить</button>
                <button onClick={()=> modalActiveDispatcher('')}>закрыть</button>
            </div>

        </>
    )
}