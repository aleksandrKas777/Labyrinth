import {actions} from '../redusers/reducer';
import {store} from '../store';

const {dispatch} = store;
const {
    sizeReducer,
    startPositionReducer,
    cellsReducer,
    positionMatrixReducer,
    moveArrReducer,
    arrowReducer,
    btnDisableReducer,
    resultReducer,
    userCellReducer
} = actions;

export const setSizeDispatcher = (size: number) => dispatch(sizeReducer(size));
export const setStartPositionDispatcher = (startPosition: number) => dispatch(startPositionReducer(startPosition));
export const setCellDispatcher = (sells: Array<number>) => dispatch(cellsReducer(sells));
export const setPositionMatrixDispatcher = (positionMatrix: number) => dispatch(positionMatrixReducer(positionMatrix));
export const setMoveArrDispatcher = (moveRoute: Array<string>) => dispatch(moveArrReducer(moveRoute));
export const setArrowDispatcher = (arrow: string) => dispatch(arrowReducer(arrow));
export const setBtnDisableDispatcher = (btnDisable: boolean) => dispatch(btnDisableReducer(btnDisable));
export const setResultDispatcher = (result: string) => dispatch(resultReducer(result));
export const setUserCellDispatcher = (userCell: number) => dispatch(userCellReducer(userCell));