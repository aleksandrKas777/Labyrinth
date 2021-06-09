import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface InitialState {
    size: number,
    startPosition: number,
    positionMatrix: number,
    cells: number[],
    moveArr: string[],
    arrow: string,
    btnDisable: boolean,
    timeoutNull: boolean
}

const initialState: InitialState = {
    size: 0,
    startPosition: 0,
    positionMatrix: 0,
    cells: [],
    moveArr: ['text'],
    arrow: 'text',
    btnDisable: true,
    timeoutNull: true
};

const sliceConfig = {
    name: 'labyrinthReducer',
    initialState: initialState,
    reducers: {
        sizeReducer: (state: any, action: PayloadAction<number>)=> {
            state.size = action.payload;
        },
        startPositionReducer: (state: any, action: PayloadAction<number>) => {
            state.startPosition = action.payload;
        },
        cellsReducer: (state:any, action: PayloadAction<Array<number>>) => {
            state.cells = action.payload;
        },
        positionMatrixReducer: (state:any, action: PayloadAction<number>) => {
            state.positionMatrix = action.payload;
        },
        moveArrReducer: (state: any, action:PayloadAction<Array<string>>) => {
            state.moveArr = action.payload;
        },
        arrowReducer: (state: any, action:PayloadAction<string>) => {
            state.arrow = action.payload;
        },
        btnDisableReducer: (state: any, action:PayloadAction<boolean>) => {
            state.btnDisable = action.payload;
        },
        timeoutNullReducer: (state: any, action:PayloadAction<boolean>) => {
            state.timeoutNull = action.payload;
        }
    }
};

export const {reducer, actions} = createSlice(sliceConfig);

