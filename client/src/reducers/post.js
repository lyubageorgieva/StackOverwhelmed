// import { STATES } from 'mongoose';

import {
    GET_FEED,
    POST_ERROR,
    DELETE_POST,
    ADD_POST,
    GET_POST,
    ADD_COMMENT_POST,
    DELETE_COMMENT_POST,
    ADD_ANSWER,
    DELETE_ANSWER,
    UPDATE_VOTES
} from '../actions/types';

const initialState = {
    feed: [],
    post: null,
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_FEED:
            return {
                ...state,
                posts: payload,
                loading: false
            };
        case GET_POST:
            return {
                ...state,
                post: payload,
                loading: false
            };
        case UPDATE_VOTES:
            return {
                ...state,
                posts: state.posts.map(post => post._id === payload.id ? { ...post, votes: payload.votes} : post),
                loading: false
            }
        case ADD_POST:
            return {
                ...state,
                posts: [payload, ...state.posts],
                loading: false
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== payload),
                loading: false
            };
        case POST_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        case ADD_COMMENT_POST:
            return {
                ...state,
                post: { ...state.post, comments: payload },
                loading: false
            };
        case DELETE_COMMENT_POST:
            return {
                ...state,
                post: {
                    ...state.post,
                    comments: state.post.comments.filter(
                        comment => comment._id !== payload
                    )
                },
                loading: false
            };
        case ADD_ANSWER:
            return {
                ...state,
                post: { ...state.post, answers: payload },
                loading: false
            };
        case DELETE_ANSWER:
            return {
                ...state,
                post: {
                    ...state.post,
                    answers: state.post.answers.filter(
                        answer => answer._id !== payload
                    )
                },
                loading: false
            };
        default:
            return state;
    }
}