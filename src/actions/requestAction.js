import types from './actionTypes';
import axiosInstance from '../services/requestHandler';

const createRequest = request => ({
    type: types.CREATE_REQUEST,
    payload: axiosInstance().post('/requests', request)
});
const getRequests = () => ({
    type: types.GET_REQUESTS,
    payload: axiosInstance().get('/requests')
});
const getRequest = (requestId) => ({
    type: types.GET_REQUEST,
    payload: axiosInstance().get(`/requests/${requestId}`)
});
const newRequest = () => ({
    type: types.NEW_REQUEST,
});
const updateRequest = (requestId, updateValues) => ({
    type: types.UPDATE_REQUEST,
    payload: axiosInstance().put(`/requests/${Number(requestId)}`,updateValues)
});


export default {
    createRequest,
    newRequest,
    getRequests,
    getRequest,
    updateRequest
};