import axios from 'axios';
import {setAlert} from './alert';

import {
    CLEAR_PROFILE,
    GET_PROFILE,
    PROFILE_ERROR,
    ACCOUNT_DELETED
} from './types';

export const getCurrentProfile = () => async dispatch => {
    try{
        const res = await axios.get('/api/profile/me');

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
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.post('/api/profile', formData, config);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

        dispatch(setAlert(edit ? 'Profile Upadated' :  'Profile Created'), 'success');

        if(!edit)
        {
            history.push('/account');
        }
        else
        {
            history.push('/account');
        }
    }catch(err)
    {
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

//Delete the Account and Profile
export const deleteAccount = () => async dispatch => {
    if(window.confirm('Do you really want your account to be deleted? This is an irreversible action. ')){
        try {
            const res = await axios.delete('/api/profile');

            dispatch({type: CLEAR_PROFILE});
            dispatch({type: ACCOUNT_DELETED});
            dispatch(setAlert('Your account has been successfully deleted'));
        }catch(err)
        {
            dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}});
        }
    }
};