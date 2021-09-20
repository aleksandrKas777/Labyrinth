import React, {useEffect} from 'react';
import arrowUp from '../../images/arrow-up.png';
import arrowDown from '../../images/arrow-down.png';
import arrowLeft from '../../images/arrow-left.png';
import arrowRight from '../../images/arrow-right.png';
import winner from '../../images/winnerHomer.png';
import losing from '../../images/losingHomer.png';
import homer from '../../images/meditateHomer.png';
import './index.scss';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {
    moveArrDispatcher,
    positionMatrixDispatcher,
    arrowDispatcher, btnStartDispatcher
} from '../../redux/dispatchers/dispatcher';


export const Track = () => {
    const {cells, startPosition, moveArr, arrow, result, speedGame} = useSelector((state: RootState) => state);
    const countStep = 11;

    // создаем массив ходов
    useEffect(() => {
        if (startPosition !== 0) {
            let positionMatrix = startPosition;
            const moveRoute: string[] = [];
            for (let i = 0; i < countStep; i++) {
                // возможные ходы
                const crossroadsArr: string[] = [];

                if (cells.indexOf(positionMatrix + 10) !== -1 && moveRoute[moveRoute.length - 1] !== 'down') {
                    crossroadsArr.push('down');

                }
                if (cells.indexOf(positionMatrix - 10) !== -1 && moveRoute[moveRoute.length - 1] !== 'up') {
                    crossroadsArr.push('up');

                }
                if (cells.indexOf(positionMatrix + 1) !== -1 && moveRoute[moveRoute.length - 1] !== 'right') {
                    crossroadsArr.push('right');

                }
                if (cells.indexOf(positionMatrix - 1) !== -1 && moveRoute[moveRoute.length - 1] !== 'left') {
                    crossroadsArr.push('left');

                }

                // делаем ход
                const step = Math.floor(Math.random() * crossroadsArr.length);
                moveRoute.push(crossroadsArr[step]);

                if (crossroadsArr[step] === 'down') {
                    positionMatrix = positionMatrix + 10;
                } else if (crossroadsArr[step] === 'up') {
                    positionMatrix = positionMatrix - 10;
                } else if (crossroadsArr[step] === 'right') {
                    positionMatrix = positionMatrix + 1;
                } else {
                    positionMatrix = positionMatrix - 1;
                }

            }
            moveRoute.push('homer');
            moveArrDispatcher(moveRoute);
            positionMatrixDispatcher(positionMatrix);
        }

    }, [cells, startPosition]);

    // проходим по массиву с ходами и устанавливаем направление стрелки
    useEffect(() => {

        let counter = 0;
        const timer = setInterval(() => {
            if (countStep === counter || startPosition === 0 || result !== '') {
                clearInterval(timer);

            }
            arrowDispatcher(moveArr[counter]);
            counter++;

        }, speedGame);

        return () => clearInterval(timer);

    }, [moveArr, result, startPosition, speedGame]);


    let arrowImg: JSX.Element;
    if (arrow === 'down') {
        arrowImg = <img src={arrowDown} className="arrow" alt="вниз"/>;
    } else if (arrow === 'left') {
        arrowImg = <img src={arrowLeft} className="arrow" alt="влево"/>;
    } else if (arrow === 'right') {
        arrowImg = <img src={arrowRight} className="arrow" alt="вправо"/>;
    } else if (arrow === 'up') {
        arrowImg = <img src={arrowUp} className="arrow" alt="вверх"/>;
    } else if (arrow === 'homer') {
        arrowImg = <img src={homer} className="arrow homer" alt="homer"/>;
        btnStartDispatcher('start');
    } else {
        arrowImg = <div className="arrow">здесь будет указано направление</div>;
    }

    let resultImg: JSX.Element;
    resultImg = result === 'winner' ?
        <img className="result" src={winner} alt="победа"/> :
        <img className="result" src={losing} alt="победа"/>;


    return (
        <div className="track">
            {result === '' ? arrowImg : resultImg}
        </div>
    );
};