//drawerActionCreators
import Action from './action';

export const OPEN_DRAWER = 'OPEN_DRAWER';
export type OPEN_DRAWER = { }
export const CLOSE_DRAWER = 'CLOSE_DRAWER';
export type CLOSE_DRAWER = { }

export function openDrawer(): Action<OPEN_DRAWER> {
    return {
        type: OPEN_DRAWER
    }
}

export function closeDrawer(): Action<CLOSE_DRAWER> {
    return {
        type: CLOSE_DRAWER
    }
}