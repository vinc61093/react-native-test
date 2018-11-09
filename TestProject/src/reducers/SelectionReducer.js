import { SELECT_VIDEO } from '../actions/type'; 

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SELECT_VIDEO:
            return action.payload; 

        default:
            return state;
    }
}