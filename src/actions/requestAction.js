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
const getAdminRequests = () => ({
    type: types.GET_ADMIN_REQUESTS,
    payload: axiosInstance().get('/requests')
});
const filterRequests = (filterData) => ({
    type: types.FILTER_REQUESTS,
    payload: axiosInstance().get(`/requests/${filterData.requestType}&${filterData.requestLevel}&${filterData.requestDate}&${filterData.requestId}&${filterData.department}/filter`)
});
const approveRequest = (requestId) => ({
    type: types.APPROVE_REQUEST,
    payload: axiosInstance().put(`/requests/${requestId}/approve`)
});
const disapproveRequest = (requestId) => ({
    type: types.DISAPPROVE_REQUEST,
    payload: axiosInstance().put(`/requests/${requestId}/disapprove`)
});
const resolveRequest = (requestId) => ({
    type: types.RESOLVE_REQUEST,
    payload: axiosInstance().put(`/requests/${requestId}/resolve`)
});

export default {
    createRequest,
    newRequest,
    getRequests,
    getRequest,
    updateRequest,
    getAdminRequests,
    filterRequests,
    approveRequest,
    disapproveRequest,
    resolveRequest
};