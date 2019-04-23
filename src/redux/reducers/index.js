import {combineReducers} from 'redux';
import CartReducers from './cartReducers';

const allReducers = {
    CartReducers
};

const rootReducers = combineReducers(allReducers);

export default rootReducers