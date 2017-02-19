import {combineReducers} from 'redux';
import * as types from '../types';

const investmentAmount = (state = {
    value: '0',
    valsetOnce: false
}, action) => {
    switch (action.type) {
        case types.INVESTMENT_AMOUNT_TEXT_FIELD_CHANGE:
            return {
                ...state,
                value: action.value,
                setOnce: true
            };
        default:
            return state;
    }
};

const modelPortfolioReducer = combineReducers({investmentAmount});

export default modelPortfolioReducer;
