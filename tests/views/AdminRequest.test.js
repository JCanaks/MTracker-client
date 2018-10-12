import React from 'react';
import { shallow } from 'enzyme';
import { AdminRequest, mapStateToProps } from '../../src/views/AdminRequest';
import mockData from '../config/mockData';
const { userProps, event } = mockData;
const { getAdminRequests, approve, resolve,
    disapprove, newRequest, getRequest,
    filterRequests, approveRequest, resolveRequest,
    disapproveRequest, request, filterData } = userProps;
const shallowRender = () => (
    shallow(
        <AdminRequest
            getAdminRequests={getAdminRequests}
            approve={approve}
            resolve={resolve}
            disapprove={disapprove}
            newRequest={newRequest}
            getRequest={getRequest}
            filterRequests={filterRequests}
            approveRequest={approveRequest}
            resolveRequest={resolveRequest}
            disapproveRequest={disapproveRequest}
            request={request}
        />
    )
)
describe('Testing mapStateToProps', () => {
    it('should map the state to the props correctly', () => {
        const state = {
            auth: {
                role: '',
            },
            request: {
                requests: '',
                filter: '',
                request: '',
                approve: '',
                resolve: '',
                disapprove: ''
            }
        };
        const componentState = mapStateToProps(state);
        expect(componentState).toEqual(
            {
                role: state.auth.role,
                request: state.request.request,
                requests: state.request.requests,
                filter: state.request.filter,
                approve: state.request.approve,
                resolve: state.request.resolve,
                disapprove: state.request.disapprove,
            }

        )
    })
})
describe('Testing componentDidMount', () => {
    it('should call componentDidMount on loading the page', () => {
        jest.spyOn(AdminRequest.prototype, 'componentDidMount');
        shallowRender();
        expect(AdminRequest.prototype.componentDidMount.mock.calls.length).toEqual(1);
    })
})
describe('Testing componentDidUpdate', () => {
    it('it should call componendidupdate with approve, resolve and dissaprove set to true', () => {
        const wrapper = shallowRender();
        wrapper.instance().componentDidUpdate()
    })
    it('it should call componentdidupdate with approve, resolve and dissaprove set to false', () => {
        const wrapper = shallow(<AdminRequest
            getAdminRequests={getAdminRequests}
            approve={false}
            resolve={false}
            disapprove={false}
        />)
        wrapper.instance().componentDidUpdate()
    })
})
describe('Testing componentWillReceiveProps', () => {
    it('it should call componentWillReceiveProps with nextprops', () => {
        const nextProps = {
            approve: true,
            resolve: true,
            disapprove: true,
        }
        const wrapper = shallowRender();
        wrapper.instance().componentWillReceiveProps(nextProps);
    })
    it('it should call componentWillReceiveProps with nextprops', () => {
        const nextProps = {
            approve: false,
            resolve: false,
            disapprove: false,
        }
        const wrapper = shallowRender();
        wrapper.instance().componentWillReceiveProps(nextProps);
    })
})
describe('Testing the closeDetailsModal function in the AdminRequest component', () => {
    it('it should set style display to none', () => {
        const wrapper = shallowRender();
        wrapper.instance().closeDetailsModal(event);
        expect(wrapper.instance().state.displayStyle.display).toEqual('none');
    })
})
describe('Testing the exitModal function in the AdminRequest component', () => {
    it('it should set style display to none', () => {
        const exitEvent = {
            target: 'modal'
        }
        const wrapper = shallowRender();
        wrapper.instance().exitModal(exitEvent);
        expect(wrapper.instance().state.displayStyle.display).toEqual('none');
    })
})
describe('Testing the showDetailsModal function in the AdminRequest component', () => {
    it('it should set style display to none', () => {
        const wrapper = shallowRender();
        wrapper.instance().showDetailsModal(event);
        expect(wrapper.instance().state.displayStyle.display).toEqual('block');
    })
})

describe('Testing the filter function in the AdminRequest component', () => {
    it('it should call the filter action', () => {
        const wrapper = shallowRender();
        wrapper.instance().filter(event);
    })
})
describe('Testing the approveRequest function in the AdminRequest component', () => {
    it('it should call the approveRequest ', () => {
        const wrapper = shallowRender();
        wrapper.instance().approveRequest(event);
    })
})
describe('Testing the disapproveRequest function in the AdminRequest component', () => {
    it('it should set style display to none', () => {
        const wrapper = shallowRender();
        wrapper.instance().disapproveRequest(event);
    })
})
describe('Testing the resolveRequest function in the AdminRequest component', () => {
    it('it should set style display to none', () => {
        const wrapper = shallowRender();
        wrapper.instance().resolveRequest(event);
    })
})
describe('Testing the showDetailsModal function in the AdminRequest component', () => {
    it('it should set style display to none', () => {
        const wrapper = shallowRender();
        wrapper.instance().resolveRequest(event);
    })
})
describe('Testing the showDetailsModal function in the AdminRequest component', () => {
    it('it should set style display to none', () => {
        const wrapper = shallowRender();
        wrapper.instance().resolveRequest(event);
    })
})
describe('Testing the showDetailsModal function in the AdminRequest component', () => {
    it('it should set style display to none', () => {
        const wrapper = shallowRender();
        wrapper.instance().handleFilterInput(event);
        expect(wrapper.instance().state.filterData).toEqual(filterData);
    })
})
