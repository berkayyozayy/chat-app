import {SET_USER} from '../actions/actionTypes';

const initialState = {
    user: {
        name: 'Berke'
    },
    number: 0
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER: return {...state, user: action.payload};
        case 'INCREMENT_SUCCESS': return {...state, number: state.number + 1};
        case 'INCREMENT_FAILED': return {...state, number: state.number - 10};
        case 'DECREMENT': return {...state, number: state.number - 1};
        default: return state;
    }
};

export default authReducer;