import React, {useEffect} from 'react';
import arrowUp from '../../images/arrow-up.png';
import arrowDown from '../../images/arrow-down.png';
import arrowLeft from '../../images/arrow-left.png';
import arrowRight from '../../images/arrow-right.png';
import './index.scss';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {
    setMoveArrDispatcher,
    setPositionMatrixDispatcher,
    setArrowDispatcher
} from '../../redux/dispatchers/dispatcher';


export const stopTimeout = (timer: any) => {
    clearTimeout(timer)
}
export const Track = () => {
    const {cells, startPosition, moveArr, arrow} = useSelector((state: RootState) => state);
    const countStep = 11;


    useEffect(() => {
        if (startPosition !== 0) {
            let positionMatrix = startPosition;
            const moveRoute: string[] = [];
            for (let i = 0; i < countStep; i++) {
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
            setMoveArrDispatcher(moveRoute);
            setPositionMatrixDispatcher(positionMatrix);
        }

    }, [cells, startPosition])

    useEffect(() => {

        let counter = 0;
        const timer = setInterval(() => {
            if (countStep === counter + 1 || startPosition === 0) {
                clearInterval(timer);
            }
            setArrowDispatcher(moveArr[counter]);
            counter++

        }, 1500);

        return () => clearInterval(timer);

    }, [moveArr, startPosition])


    let arrowImg:JSX.Element;
    if (arrow === 'down') {
        arrowImg = <img src={arrowDown} className='arrow' alt='вниз'/>
    } else if (arrow === 'left') {
        arrowImg = <img src={arrowLeft} className='arrow' alt='влево'/>
    } else if (arrow === 'right') {
        arrowImg = <img src={arrowRight} className='arrow' alt='вправо'/>
    } else if (arrow === 'up') {
        arrowImg = <img src={arrowUp} className='arrow' alt='вверх'/>
    } else {
        arrowImg = <div className='arrow'>здесь будет указано напрвление</div>
    }


    return (
        <div className='track'>
            {arrowImg}
        </div>
    )
}