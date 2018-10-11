
import types from '../actions/actionTypes';

export const initialState = {
    isLoading: false,
    errors: {
        status: false,
        message: '',
        response: [],
    },
    request: {},
    requests: [],
    updated: false,
    success: false
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.NEW_REQUEST: {
            return {
                ...state,
                errors: {
                    message: '',
                    response: [],
                },
                success: false,
                updated: false,
                request: {}
            };
        }
        case `${types.CREATE_REQUEST}_LOADING`: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case `${types.CREATE_REQUEST}_SUCCESS`: {
            const newRequests = [...state.requests,
            action.payload.data.request]
            return {
                ...state,
                isLoading: false,
                errors: {
                    message: '',
                    response: [],
                },
                request: action.payload.data.request,
                requests: newRequests,
                success: true,
            };
        }
        case `${types.CREATE_REQUEST}_FAILURE`: {
            return {
                ...state,
                isLoading: false,
                errors: {
                    message: action.payload.message,
                    response: action.payload.response,
                }
            };
        }
        case `${types.GET_REQUESTS}_LOADING`: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case `${types.GET_REQUESTS}_SUCCESS`:
            return {
                ...state,
                isLoading: false,
                errors: {
                    message: '',
                    response: [],
                },
                requests: action.payload.data,
            };
        case `${types.GET_REQUESTS}_FAILURE`: {
            return {
                ...state,
                isLoading: false,
                errors: {
                    message: action.payload.message,
                    response: action.payload.response,
                }
            };
        }
        case `${types.GET_REQUEST}_LOADING`: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case `${types.GET_REQUEST}_SUCCESS`:
            return {
                ...state,
                isLoading: false,
                errors: {
                    message: '',
                    response: [],
                },
                request: action.payload.data,
            };
        case `${types.GET_REQUEST}_FAILURE`:
            return {
                ...state,
                isLoading: false,
                errors: {
                    message: action.payload.message,
                    response: action.payload.response,
                }
            };
        case `${types.UPDATE_REQUEST}_LOADING`: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case `${types.UPDATE_REQUEST}_SUCCESS`:
            return {
                ...state,
                isLoading: false,
                errors: {
                    message: '',
                    response: [],
                },
                updated: true,
            };
        case `${types.UPDATE_REQUEST}_FAILURE`: {
            return {
                ...state,
                isLoading: false,
                errors: {
                    message: action.payload.message,
                    response: action.payload.response,
                },
                updated: false,
            };
        }
        default:
            return state;
    }
};
