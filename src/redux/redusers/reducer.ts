import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
    size: 0,
    startPosition: 100,
    startPositionMatrix: 0,
    cells: []
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
        startPositionMatrixReducer: (state:any, action: PayloadAction<number>) => {
            state.startPositionMatrix = action.payload;
        }
    }
};

export const {reducer, actions} = createSlice(sliceConfig);

