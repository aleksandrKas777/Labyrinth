import React from 'react';
import './index.scss';

export const Playground = () => {
    const size = 4;


    const Cell = () => {
        let startPositionX = Math.floor(Math.random() * size);
        let startPositionY = Math.floor(Math.random() * size);
        console.log(startPositionX);
        console.log(startPositionY);
        let counter = 0;
        let cells: any[] = [];
        for (let i = 0; i <size; i++) {
            let row = [];
            for (let j = 0; j < size; j++) {
                if (j === startPositionX && i === startPositionY) {
                    row.push(<button className='cell' key={counter}>START</button>);
                } else {
                    row.push(<button className='cell' key={counter} />);
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