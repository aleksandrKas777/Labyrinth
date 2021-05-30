import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
    size: 0
};

const sliceConfig = {
    name: 'labyrinthReducer',
    initialState: initialState,
    reducers: {
        optionSize: (state: any, action: PayloadAction<number>)=> {
            state.size = action.payload;
        }
    }
};

export const {reducer, actions} = createSlice(sliceConfig);

