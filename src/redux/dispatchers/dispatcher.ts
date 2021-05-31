import {actions} from '../redusers/reducer';
import {store} from '../store';

const {dispatch} = store;
const {sizeReducer, startCellReducer} = actions;

export const setSizeDispatcher = (size: number) => dispatch(sizeReducer(size));
export const setStartCellDispatcher = (startCell: number) => dispatch(startCellReducer(startCell));