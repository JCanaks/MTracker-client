import errorMiddleware from '../../src/middleware/errorMiddleware';

describe('Testing errorMiddleware', () => {
    const next = action => action;
    it('should catch a thrown error', async () => {
        const error = 'THIS IS A VIRUS!!!';
        const next = action => {
            return action.payload;
        };
        const action = {
            type: '_FAILURE',
            payload: new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject(error);
                }, 10);
            })
        }
        const result = await errorMiddleware()(next)(action);
        expect(result).toEqual(error);
    });
    it('should decongest the nested error response on login failure', () => {
        const action = {
            type: 'LOGIN_FAILURE',
            payload: {
                message: 'login error'
            }
        };
        const prevAction = { ...action };
        const result = errorMiddleware()(next)(action);
        expect(result.payload.message).toEqual(prevAction.payload.message);
    });
    it('should return an error response', () => {
        const action = {
            type: 'LOGIN_FAILURE',
            payload: {
                response: {
                    status:'status',
                    data:{
                        details:'details'
                    }
                }
            }
        };
        const prevAction = { ...action };
        const result = errorMiddleware()(next)(action);
        expect(result.payload.response).toEqual([]);
    });
    it('should return an error response', () => {
        const action = {
            type: 'LOGIN_FAILURE',
            payload: {
                response: {
                    status:'status',
                    data:{
                        message:'details'
                    }
                }
            }
        };
        const prevAction = { ...action };
        const result = errorMiddleware()(next)(action);
        expect(result.payload.response).toEqual(action.payload.response);
    });
    it('should call next for every other action type', () => {
        const action = {
            type: 'LOGIN_SUCCESS',
            payload: {
                data: {
                        token: 'nested_token'
                    }
            }
        }
        const result = errorMiddleware()(next)(action);
        expect(result.payload.data.token).toEqual(action.payload.data.token);
    });
    it('should return an empty array if there is no error response', () => {
        const action = {
            type: 'LOGIN_FAILURE',
            payload: {
                message: 'error'
            }
        };
        const result = errorMiddleware()(next)(action);
        expect(result.payload.response).toEqual([]);
    })
});
