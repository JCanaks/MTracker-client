import types from '../actions/actionTypes';

export const initialState = {
  isLoading: false,
  errors: {
    status: false,
    message: '',
    response: [],
  },
  signupInfo: {},
  token: '',
  role: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.LOGOUT:
      return {
        ...state,
        token: ''
      };
    case `${types.SIGN_UP}_LOADING`: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case `${types.SIGN_UP}_SUCCESS`:
      return {
        ...state,
        isLoading: false,
        errors: {
          message: '',
          response: [],
        },
        signupInfo: action.payload.data,
        token: action.payload.data.token,
        role: action.payload.data.role,
      };
    case `${types.SIGN_UP}_FAILURE`: {
      return {
        ...state,
        isLoading: false,
        errors: {
          message: action.payload.message,
          response: action.payload.response,
        }
      };
    }
    case `${types.LOGIN}_LOADING`: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case `${types.LOGIN}_SUCCESS`:
      return {
        ...state,
        isLoading: false,
        errors: {
          message: '',
          response: [],
        },
        token: action.payload.data.token,
        role: action.payload.data.role,
      };
    case `${types.LOGIN}_FAILURE`: {
      return {
        ...state,
        isLoading: false,
        errors: {
          message: action.payload.message,
          response: action.payload.response,
        }
      };
    }
    case types.PERSIST_LOGIN:
      return {
        ...state,
        token: action.payload.token,
        role: action.payload.role,
      };
    default:
      return state;
  }
};
