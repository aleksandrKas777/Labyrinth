import React, {useEffect} from 'react';
import './index.scss';
import start from '../../images/start-button.png';
import {useSelector} from 'react-redux';
import {setOptionSizeDispatcher} from '../../redux/dispatchers/dispatcher';
import {RootState} from '../../redux/store';

export const Playground = () => {

    const {size} = useSelector((state:RootState) => state);

    useEffect(()=> {
        setOptionSizeDispatcher(3);
    }, [])

    const Cell = () => {
        let startPositionX = Math.floor(Math.random() * size);
        let startPositionY = Math.floor(Math.random() * size);
        let counter = 0;
        let cells: any[] = [];
        for (let i = 0; i < size; i++) {
            let row = [];
            for (let j = 0; j < size; j++) {
                if (j === startPositionX && i === startPositionY) {
                    row.push(
                        <button className='cell' key={counter}>
                            <img className='cellImg' src={start} alt='START'/>
                        </button>);
                } else {
                    row.push(<button className='cell' key={counter}/>);
                }
                counter++;
            }
            cells.push(<div className='row' key={'row' + i}> {row} </div>);

        }
        return cells;
    }


    return (
        <div className={'playground'}>

            {Cell()}

        </div>
    )
}