
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
    success: false,
    filter: false,
    approve: false,
    resolve: false,
    disapprove: false,
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
                request: {},
                filter: false,
                approve: false,
                resolve: false,
                disapprove: false,
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
                },
                requests: [],
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
                },
                request: {}
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
        case `${types.GET_ADMIN_REQUESTS}_LOADING`: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case `${types.GET_ADMIN_REQUESTS}_SUCCESS`:
            return {
                ...state,
                isLoading: false,
                errors: {
                    message: '',
                    response: [],
                },
                requests: action.payload.data,
            };
        case `${types.GET_ADMIN_REQUESTS}_FAILURE`: {
            return {
                ...state,
                isLoading: false,
                errors: {
                    message: action.payload.message,
                    response: action.payload.response,
                },
                requests: [],
            };
        }
        case `${types.FILTER_REQUESTS}_LOADING`: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case `${types.FILTER_REQUESTS}_SUCCESS`:
            return {
                ...state,
                isLoading: false,
                errors: {
                    message: '',
                    response: [],
                },
                requests: action.payload.data,
                filter: true,
            };
        case `${types.FILTER_REQUESTS}_FAILURE`: {
            return {
                ...state,
                isLoading: false,
                errors: {
                    message: action.payload.message,
                    response: action.payload.response,
                },
                requests: [],
                filter: false,
            };
        }
        case `${types.APPROVE_REQUEST}_LOADING`: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case `${types.APPROVE_REQUEST}_SUCCESS`:
            return {
                ...state,
                isLoading: false,
                errors: {
                    message: '',
                    response: [],
                },
                approve: true,
            };
        case `${types.APPROVE_REQUEST}_FAILURE`: {
            return {
                ...state,
                isLoading: false,
                errors: {
                    message: action.payload.message,
                    response: action.payload.response,
                },
                approve: false,
            };
        }
        case `${types.DISAPPROVE_REQUEST}_LOADING`: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case `${types.DISAPPROVE_REQUEST}_SUCCESS`:
            return {
                ...state,
                isLoading: false,
                errors: {
                    message: '',
                    response: [],
                },
                disapprove: true,
            };
        case `${types.DISAPPROVE_REQUEST}_FAILURE`: {
            return {
                ...state,
                isLoading: false,
                errors: {
                    message: action.payload.message,
                    response: action.payload.response,
                },
                disapprove: false,
            };
        }
        case `${types.RESOLVE_REQUEST}_LOADING`: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case `${types.RESOLVE_REQUEST}_SUCCESS`:
            return {
                ...state,
                isLoading: false,
                errors: {
                    message: '',
                    response: [],
                },
                resolve: true,
            };
        case `${types.RESOLVE_REQUEST}_FAILURE`: {
            return {
                ...state,
                isLoading: false,
                errors: {
                    message: action.payload.message,
                    response: action.payload.response,
                },
                resolve: false,
            };
        }
        default:
            return state;
    }
};
