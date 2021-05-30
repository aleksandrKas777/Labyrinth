import {actions} from '../redusers/reducer';
import {store} from '../store';

const {dispatch} = store;
const {optionSize} = actions;

export const setOptionSizeDispatcher = (size: number) => dispatch(optionSize(size));