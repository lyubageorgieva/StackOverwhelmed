import axios from 'axios';
import {setAlert} from './alert';

import { PROFILE_ERROR, GET_PROFILE } from './types';

export const getCurrentProfile = () => async dispatch => {
    try
    {
        const res = await axios.get('./api/profile/me');
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    }catch(err)
    {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
};

export const createProfile = (formData, history, edit = false) => async dispatch => {
    try{
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }
        const res = await axios.post('/api/profile', formData, config);
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

        dispatch (setAlert(edit ? 'Profile updated' : 'Profile created', 'success'));

        if(!edit){
            history.push('/account');
        }


    }catch(err){
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });

    }
}