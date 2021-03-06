import React, {useState} from 'react';
import {
    arrowDispatcher,
    modalActiveDispatcher,
    resultDispatcher,
    sizeDispatcher,
    speedGameDispatcher, startPositionDispatcher, userCellDispatcher
} from '../../../../redux/dispatchers/dispatcher';

export const Settings: React.FunctionComponent = () => {
    const [size, setSize] = useState(6);
    const [complexity, setComplexity] = useState(1500);

    const settingsSave = () => {
        arrowDispatcher('text');
        startPositionDispatcher(0)
        resultDispatcher('');
        userCellDispatcher(0);
        sizeDispatcher(size);
        speedGameDispatcher(complexity);
        modalActiveDispatcher('');
    };

    return (
        <>
            <h2>Настройки</h2>

            <div className="select">
                <p className="titleModal">размер поля</p>
                <select name="selectSize" value={size} onChange={(event) => setSize(parseInt(event.target.value))}>
                    <option value="3" selected>3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>

            <div className="select">
                <p className="titleModal">сложность</p>
                <select name="selectSpeed" value={complexity}
                        onChange={(event) => setComplexity(parseInt(event.target.value))}>
                    <option value="2000" selected>легко</option>
                    <option value="1500">средне</option>
                    <option value="800">тяжело</option>
                </select>
            </div>

            <div className="btnSettings">
                <button onClick={settingsSave}>сохранить</button>
                <button onClick={() => modalActiveDispatcher('')}>закрыть</button>
            </div>

        </>
    )
}