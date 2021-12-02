import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_FEED,
    POST_ERROR,
    DELETE_POST,
    ADD_POST,
    GET_POST,
    ADD_COMMENT_POST,
    DELETE_COMMENT_POST,
    ADD_ANSWER,
    DELETE_ANSWER
} from './types';

// Get posts
export const getFeed = () => async dispatch => {
    try {
        const res = await axios.get('/api/feed');

        dispatch({
            type: GET_FEED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
        
    }
};

// Delete post 
export const deletePost = id => async dispatch => {
    try {
        const res = await axios.delete(`/api/feed/${id}`);
        dispatch({
            type: DELETE_POST,
            payload: id
        });
        dispatch(setAlert('Post Deleted', 'danger'));
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
        
    }
};


// Add question/post 
export const addPost = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.post('/api/feed', formData, config);
        dispatch({
            type: ADD_POST,
            payload: res.data
        });
        dispatch(setAlert('Post Created', 'danger'));
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
};

// Get post (individual post)
export const getPost = id => async dispatch => {
    try {
        const res = await axios.get(`/api/feed/${id}`);

        dispatch({
            type: GET_POST,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
        
    }
};

// Add comment to a post 
export const addCommentPost = (postId, formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.post(`/api/feed/comment/${postId}`, formData, config); 
        dispatch({
            type: ADD_COMMENT_POST,
            payload: res.data
        });
        dispatch(setAlert('Comment Added', 'danger'));
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
};


// Delete comment to a post 
export const deleteCommentPost = (postId, commentId) => async dispatch => {


    try {
        const res = await axios.delete(`/api/feed/comment/${postId}/${commentId}`); 
        dispatch({
            type: DELETE_COMMENT_POST,
            payload: commentId
        });
        dispatch(setAlert('Comment Deleted', 'danger'));
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
};


// Add answer to a post 
export const addAnswer = (postId, formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post(`/api/feed/answer/${postId}`, formData, config); 
        dispatch({
            type: ADD_ANSWER,
            payload: res.data
        });
        dispatch(setAlert('Answer Added', 'danger'));
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
};




