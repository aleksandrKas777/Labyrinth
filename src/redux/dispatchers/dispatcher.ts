import {actions} from '../redusers/reducer';
import {store} from '../store';

const {dispatch} = store;
const {sizeReducer, startPositionReducer, cellsReducer, startPositionMatrixReducer} = actions;

export const setSizeDispatcher = (size: number) => dispatch(sizeReducer(size));
export const setStartPositionDispatcher = (startPosition: number) => dispatch(startPositionReducer(startPosition));
export const setCellDispatcher = (sells: Array<number>) => dispatch(cellsReducer(sells));
export const setPositionMatrixDispatcher = (positionMatrix: number) => dispatch(startPositionMatrixReducer(positionMatrix))