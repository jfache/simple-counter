import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './actions';

const initialState = {
    count: 1987,
    step: 1
};

const counterApp = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                count: state.count + action.step
            };
        case DECREMENT_COUNTER:
            return {
                ...state,
                count: state.count - action.step
            };
        default:
            return state;
    }
};

export default counterApp;
