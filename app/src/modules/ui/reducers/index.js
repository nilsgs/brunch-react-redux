import { UPDATE_TITLE } from '../constants';

export function ui(state = { title: ''}, action){
    switch(action.type){
        case UPDATE_TITLE:
            return Object.assign({}, state, {
               title: action.title 
            });
        default:
            return state;
    }
}