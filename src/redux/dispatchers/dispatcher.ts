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
    userCellReducer,
    modalActiveReducer,
    statisticGameReducer,
    speedGameReducer
} = actions;

export const sizeDispatcher = (size: number) => dispatch(sizeReducer(size));
export const startPositionDispatcher = (startPosition: number) => dispatch(startPositionReducer(startPosition));
export const cellDispatcher = (sells: Array<number>) => dispatch(cellsReducer(sells));
export const positionMatrixDispatcher = (positionMatrix: number) => dispatch(positionMatrixReducer(positionMatrix));
export const moveArrDispatcher = (moveRoute: Array<string>) => dispatch(moveArrReducer(moveRoute));
export const arrowDispatcher = (arrow: string) => dispatch(arrowReducer(arrow));
export const btnDisableDispatcher = (btnDisable: boolean) => dispatch(btnDisableReducer(btnDisable));
export const resultDispatcher = (result: string) => dispatch(resultReducer(result));
export const userCellDispatcher = (userCell: number) => dispatch(userCellReducer(userCell));
export const modalActiveDispatcher = (modalActive: string) => dispatch(modalActiveReducer(modalActive));
export const statisticGameDispatcher = (statistic: Array<string>) => dispatch(statisticGameReducer(statistic));
export const speedGameDispatcher = (speed: number) => dispatch(speedGameReducer(speed));