import Action from '../shared/actions/action';
import { SET_USER } from './login.actions';

export type State = {
    name: string
}

const initialState = {
    name: '',
};

export default function (state:State = initialState, action:Action<SET_USER>): State {
    if (action.type === SET_USER) {
        return Object.assign({}, state, { name: action.payload.name });
        // return {
        //   ...state,
        //   name: action.payload,
        // };
    }
    return state;
}