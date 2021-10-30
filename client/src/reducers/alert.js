import { SET_ALERT, DELETE_ALERT } from "../actions/types";
const initialState = [];

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(action.type) {
        case SET_ALERT:
            return [...state, payload];
        case DELETE_ALERT:
            return state.filter(alert => alert.id !== payload);
        default:
            return state;
    }
}