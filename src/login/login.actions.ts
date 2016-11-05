//LoginActionCreator
import Action from '../shared/actions/action';

export const SET_USER = 'SET_USER';
export type SET_USER = { name: string }

export function setUser(name: string): Action<SET_USER> {
    return {
        type: SET_USER,
        payload: {
            name
        }
    }
}