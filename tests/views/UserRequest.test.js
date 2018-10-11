import React from 'react';
import { shallow } from 'enzyme';
import { UserRequest, mapStateToProps } from '../../src/views/UserRequest';
import mockData from '../config/mockData';
const { userProps } = mockData;
const { success, getRequests,
    updated, request, updateData,
    newRequest } = userProps;

const shallowRender = () => (
    shallow(<UserRequest
        success={success}
        getRequests={getRequests}
        updated={updated}
        request={request}
        newRequest={newRequest}
    />)
)
describe('Testing mapStateToProps', () => {
    it('should map the state to the props correctly', () => {
        const state = {
            auth: {
                role: '',
            },
            request: {
                request: '',
                success: '',
                errors: '',
                requests: '',
                updated: '',
            }
        };
        const componentState = mapStateToProps(state);
        expect(componentState).toEqual(
            {
                role: state.auth.role,
                request: state.request.request,
                success: state.request.success,
                errors: state.request.errors,
                requests: state.request.requests,
                updated: state.request.updated,
            }

        )
    })
})
describe('Testing componentDidMount', () => {
    it('should call componentDidMount on loading the page with success true', () => {
        jest.spyOn(UserRequest.prototype, 'componentDidMount');
        shallowRender();
        expect(UserRequest.prototype.componentDidMount.mock.calls.length).toEqual(1);
      }); 
      it('should call componentDidMount on loading the page with success false', () => {
        jest.spyOn(UserRequest.prototype, 'componentDidMount');
        shallow(<UserRequest
            success={false}
            getRequests={getRequests}
            updated={updated}
            request={request}
        />)
        expect(UserRequest.prototype.componentDidMount.mock.calls.length).toEqual(2);
      }); 
})
describe('Testing componentDidUpdate', () => {
    it('it should call componendidupdate with success true', () => {
        const wrapper = shallowRender();
        wrapper.instance().componentDidUpdate()
    })
    it('it should call componentdidupdate with success false and updated false', () => {
        const wrapper = shallow(<UserRequest
            success={false}
            getRequests={getRequests}
            updated={false}
            request={request}
        />)
        wrapper.instance().componentDidUpdate()
    }) 
})
describe('Testing componentWillReceiveProps', () => {
    it('it should call componentWillReceiveProps with nextprops', () => {
        const nextProps ={
            request:{
                requestId: 0,
            },
            errors:{
                message:{
                    details:'',
                }
            }
        }
        const wrapper = shallowRender();
        wrapper.instance().componentWillReceiveProps(nextProps);
        expect(wrapper.instance().state.updateData).toEqual(updateData);
    })
    it('it should call componentWillReceiveProps with nextprops', () => {
        const nextProps ={
            success: true,
            updated:true,
            request:{
                requestId: 0,
            },
            errors:{
                message:{
                    details:[
                        {
                          message: 'a message'
                        }
                    ],
                }
            }
        }
        const wrapper = shallowRender();
        wrapper.instance().componentWillReceiveProps(nextProps);
        expect(wrapper.instance().state.errorText).toEqual(nextProps.errors.message.details[0].message);
    })
})