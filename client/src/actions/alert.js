import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, DELETE_ALERT } from "./types";

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
    const id = uuidv4();
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id }
    });

    setTimeout(() => dispatch({ type: DELETE_ALERT, payload: id }), timeout);
}

