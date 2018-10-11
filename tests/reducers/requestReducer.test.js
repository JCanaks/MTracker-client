import requestReducer, { initialState } from '../../src/reducers/requestReducer';
import actions from '../../src/actions/actionTypes';
import mockData from '../config/mockData';

const { createInfo, getRequestsInfo, updateInfo } = mockData;
describe('Testing authReducer', () => {
    it('should return the state when an action is not specified', () => {
        const newState = {
            ...initialState,
        }
        const state = requestReducer()
        expect(state).toEqual(newState);
    })
    it('should return the state when an action is an empty object', () => {
        const newState = {
            ...initialState,
        }
        const state = requestReducer(initialState, {})
        expect(state).toEqual(newState);
    })
    it('should return the state when no matching action type', () => {
        const randomAction = {
            type: 'SOME_RANDOM_TYPE',
            payload: {
                data: [1, 2, 3]
            }
        }
        const currentState = requestReducer(initialState, randomAction)
        expect(currentState).toEqual(initialState);

    })

    it('should return the appropriate state when NEW REQUEST action type matches', () => {
        const action = {
            type: actions.NEW_REQUEST,
        }
        const newState = {
            ...initialState,
            errors: {
                message: '',
                response: [],
            },
            success: false,
            updated: false,
            request: {}
        }
        const state = requestReducer(initialState, action)
        expect(state).toEqual(newState);
    })
    it('should return the appropriate state when CREATE_REQUEST FAILURE action type matches', () => {
        const action = {
            type: `${actions.CREATE_REQUEST}_FAILURE`,
            payload: createInfo
        }
        const newState = {
            ...initialState,
            isLoading: false,
            errors: {
                message: action.payload.message,
                response: action.payload.response,
            }
        }
        const state = requestReducer(initialState, action)
        expect(state).toEqual(newState);
    })
    it('should return the appropriate state when CREATE_REQUEST LOADING action type matches', () => {
        const action = {
            type: `${actions.CREATE_REQUEST}_LOADING`,
            payload: createInfo
        }
        const newState = {
            ...initialState,
            isLoading: true,
        }
        const state = requestReducer(initialState, action)
        expect(state).toEqual(newState);
    })
    it('should return the appropriate state when CREATE_REQUEST SUCCESS action type matches', () => {
        const action = {
            type: `${actions.CREATE_REQUEST}_SUCCESS`,
            payload: createInfo
        }
        const newRequests = [...initialState.requests,
        action.payload.data.request]
        const newState = {
            ...initialState,
            isLoading: false,
            errors: {
                message: '',
                response: [],
            },
            request: action.payload.data.request,
            requests: newRequests,
            success: true,
        }
        const state = requestReducer(initialState, action)
        expect(state).toEqual(newState);
    })
    it('should return the appropriate state when GET_REQUESTS FAILURE action type matches', () => {
        const action = {
            type: `${actions.GET_REQUESTS}_FAILURE`,
            payload: getRequestsInfo
        }
        const newState = {
            ...initialState,
            isLoading: false,
            errors: {
                message: action.payload.message,
                response: action.payload.response,
            }
        }
        const state = requestReducer(initialState, action)
        expect(state).toEqual(newState);
    })
    it('should return the appropriate state when GET_REQUESTS LOADING action type matches', () => {
        const action = {
            type: `${actions.GET_REQUESTS}_LOADING`,
            payload: getRequestsInfo
        }
        const newState = {
            ...initialState,
            isLoading: true,
        }
        const state = requestReducer(initialState, action)
        expect(state).toEqual(newState);
    })
    it('should return the appropriate state when GET_REQUESTS SUCCESS action type matches', () => {
        const action = {
            type: `${actions.GET_REQUESTS}_SUCCESS`,
            payload: getRequestsInfo
        }
        const newState = {
            ...initialState,
            isLoading: false,
            errors: {
                message: '',
                response: [],
            },
            requests: action.payload.data,
        }
        const state = requestReducer(initialState, action)
        expect(state).toEqual(newState);
    })
    it('should return the appropriate state when GET_REQUEST FAILURE action type matches', () => {
        const action = {
            type: `${actions.GET_REQUEST}_FAILURE`,
            payload: getRequestsInfo
        }
        const newState = {
            ...initialState,
            isLoading: false,
            errors: {
                message: action.payload.message,
                response: action.payload.response,
            }
        }
        const state = requestReducer(initialState, action)
        expect(state).toEqual(newState);
    })
    it('should return the appropriate state when GET_REQUEST LOADING action type matches', () => {
        const action = {
            type: `${actions.GET_REQUEST}_LOADING`,
            payload: getRequestsInfo
        }
        const newState = {
            ...initialState,
            isLoading: true,
        }
        const state = requestReducer(initialState, action)
        expect(state).toEqual(newState);
    })
    it('should return the appropriate state when GET_REQUEST SUCCESS action type matches', () => {
        const action = {
            type: `${actions.GET_REQUEST}_SUCCESS`,
            payload: getRequestsInfo
        }
        const newState = {
            ...initialState,
            isLoading: false,
            errors: {
                message: '',
                response: [],
            },
            request: action.payload.data,
        }
        const state = requestReducer(initialState, action)
        expect(state).toEqual(newState);
    })
    it('should return the appropriate state when UPDATE_REQUEST FAILURE action type matches', () => {
        const action = {
            type: `${actions.UPDATE_REQUEST}_FAILURE`,
            payload: updateInfo
        }
        const newState = {
            ...initialState,
            isLoading: false,
            errors: {
                message: action.payload.message,
                response: action.payload.response,
            },
            updated: false,
        }
        const state = requestReducer(initialState, action)
        expect(state).toEqual(newState);
    })
    it('should return the appropriate state when UPDATE_REQUEST LOADING action type matches', () => {
        const action = {
            type: `${actions.UPDATE_REQUEST}_LOADING`,
            payload: updateInfo
        }
        const newState = {
            ...initialState,
            isLoading: true,
        }
        const state = requestReducer(initialState, action)
        expect(state).toEqual(newState);
    })
    it('should return the appropriate state when UPDATE_REQUEST SUCCESS action type matches', () => {
        const action = {
            type: `${actions.UPDATE_REQUEST}_SUCCESS`,
            payload: getRequestsInfo
        }
        const newState = {
            ...initialState,
            isLoading: false,
            errors: {
                message: '',
                response: [],
            },
            updated: true,
        }
        const state = requestReducer(initialState, action)
        expect(state).toEqual(newState);
    })
});

