import authReducer, { initialState } from '../../src/reducers/authReducer';
import actions from '../../src/actions/actionTypes';
import mockData from '../config/mockData';

const { signupInfo, loginInfo } = mockData;
describe('Testing authReducer', () => {
    it('should return the state when an action is not specified', () => {
        const newState = {
            ...initialState,
        }
        const state = authReducer()
        expect(state).toEqual(newState);
    })
    it('should return the state when an action is an empty object', () => {
        const newState = {
            ...initialState,
        }
        const state = authReducer(initialState, {})
        expect(state).toEqual(newState);
    })
    it('should return the state when no matching action type', () => {
        const randomAction = {
            type: 'SOME_RANDOM_TYPE',
            payload: {
                data: [1, 2, 3]
            }
        }
        const currentState = authReducer(initialState, randomAction)
        expect(currentState).toEqual(initialState);

    })
    it('should return the state when LOGIN action type matches', () => {
        const action = {
            type: 'LOGOUT',
        }
        const newState = {
            ...initialState,
            token: ''
        }
        const state = authReducer(initialState, action)
        expect(state).toEqual(newState);
    })
    it('should return the appropriate state when SIGNUP SUCCESS action type matches', () => {
        const action = {
            type: `${actions.SIGN_UP}_SUCCESS`,
            payload: signupInfo
        }
        const newState = {
            ...initialState,
            isLoading: false,
            errors: {
                message: '',
                response: [],
            },
            signupInfo: action.payload.data,
            token: action.payload.data.token,
            role: action.payload.data.role,
        }
        const state = authReducer(initialState, action)
        expect(state).toEqual(newState);
    })
    it('should return the appropriate state when SIGNUP FAILURE action type matches', () => {
        const action = {
            type: `${actions.SIGN_UP}_FAILURE`,
            payload: signupInfo
        }
        const newState = {
            ...initialState,
            isLoading: false,
            errors: {
                message: action.payload.message,
                response: action.payload.response,
            }
        }
        const state = authReducer(initialState, action)
        expect(state).toEqual(newState);
    })
    it('should return the appropriate state when SIGNUP LOADING action type matches', () => {
        const action = {
            type: `${actions.SIGN_UP}_LOADING`,
            payload: signupInfo
        }
        const newState = {
            ...initialState,
            isLoading: true,
        }
        const state = authReducer(initialState, action)
        expect(state).toEqual(newState);
    })
    it('should return the appropriate state when LOGIN SUCCESS action type matches', () => {
        const action = {
            type: `${actions.LOGIN}_SUCCESS`,
            payload: loginInfo
        }
        const newState = {
            ...initialState,
            isLoading: false,
            errors: {
                message: '',
                response: [],
            },
            token: action.payload.data.token,
            role: action.payload.data.role,
        }
        const state = authReducer(initialState, action)
        expect(state).toEqual(newState);
    })
    it('should return the appropriate state when LOGIN FAILURE action type matches', () => {
        const action = {
            type: `${actions.LOGIN}_FAILURE`,
            payload: loginInfo
        }
        const newState = {
            ...initialState,
            isLoading: false,
            errors: {
                message: action.payload.message,
                response: action.payload.response,
            }
        }
        const state = authReducer(initialState, action)
        expect(state).toEqual(newState);
    })
    it('should return the appropriate state when LOGIN LOADING action type matches', () => {
        const action = {
            type: `${actions.LOGIN}_LOADING`,
            payload: loginInfo
        }
        const newState = {
            ...initialState,
            isLoading: true,
        }
        const state = authReducer(initialState, action)
        expect(state).toEqual(newState);
    })
    it('should return the appropriate state when LOGIN LOADING action type matches', () => {
        const action = {
            type: `${actions.PERSIST_LOGIN}`,
            payload: {
                token: 'token',
                role: 'role',
            }
        }
        const newState = {
            ...initialState,
            token: action.payload.token,
            role: action.payload.role,
        }
        const state = authReducer(initialState, action)
        expect(state).toEqual(newState);
    })
});

