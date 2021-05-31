import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
    size: 0,
    startCell: 100,
};

const sliceConfig = {
    name: 'labyrinthReducer',
    initialState: initialState,
    reducers: {
        sizeReducer: (state: any, action: PayloadAction<number>)=> {
            state.size = action.payload;
        },
        startCellReducer: (state: any, action:PayloadAction<number>)=> {
            state.startCell = action.payload
        }
    }
};

export const {reducer, actions} = createSlice(sliceConfig);

