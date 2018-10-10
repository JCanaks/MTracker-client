import types from './actionTypes';
import axiosInstance from '../services/requestHandler';

const createRequest = request => ({
    type: types.CREATE_REQUEST,
    payload: axiosInstance().post('/users/requests', request)
});
const getRequests = () => ({
    type: types.GET_REQUESTS,
    payload: axiosInstance().get('/users/requests')
});
const getRequest = (requestId) => ({
    type: types.GET_REQUEST,
    payload: axiosInstance().get(`/users/requests/${requestId}`)
});
const newRequest = () => ({
    type: types.NEW_REQUEST,
});
const updateRequest = (requestId, updateValues) => ({
    type: types.UPDATE_REQUEST,
    payload: axiosInstance().put(`/users/requests/${Number(requestId)}`,updateValues)
});


export default {
    createRequest,
    newRequest,
    getRequests,
    getRequest,
    updateRequest
};