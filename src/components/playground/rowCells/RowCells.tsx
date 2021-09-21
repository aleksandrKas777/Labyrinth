import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import React from 'react';
import {Cell} from '../cell/Cell';

interface RowCellsProps {
    itemRow: number,
}

export const RowCells: ({itemRow}: RowCellsProps) => JSX.Element = ({itemRow}: RowCellsProps) => {
    const {
        size
    } = useSelector((state: RootState) => state);

    const arrCellsRow = [];
    for (let i = 1; i <= size; i++) {
        arrCellsRow.push(itemRow + i);
    }

    return (
        <div className='rowCells'>
            {arrCellsRow.map((item) => <Cell key={item.toString()} item={item}/>)}
        </div>
    )
}