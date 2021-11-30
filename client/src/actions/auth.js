import axios from 'axios';
import { setAlert } from './alert';
import { 
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    USER_LOADED,
    AUTH_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_PROFILE
} from './types';
import setAuthToken from '../utils/setAuthToken';

// Loading a user
export const loadUser = () => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/auth');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });

    } catch (error) {
        dispatch({
            type: AUTH_FAIL
        }); 
    }
}

// To register a user
export const signup = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password });

    try {
        const res = await axios.post('/api/users', body, config);

        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({ 
            type: SIGNUP_FAIL
        });
    }
};

// To login a user
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/api/auth', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({ 
            type: LOGIN_FAIL
        });
    }
};

// To logout user or clear the profile
export const logout = () => dispatch => {
    dispatch({ type: CLEAR_PROFILE});
    dispatch({ type: LOGOUT});
}