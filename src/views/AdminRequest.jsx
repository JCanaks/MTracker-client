import React, { Component } from 'react';
import RequestView from '../components/RequestView';
import requestAction from '../actions/requestAction';
import { connect } from 'react-redux';
export class AdminRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestRowClass: 'request-top-row',
            textMarginClass: 'text-margin1',
            textInfoClass: 'text-info',
            displayStyle: {
                display: 'none'
            },
            filterData: {
                requestId: 0,
                requestType: 'none',
                requestLevel: 'none',
                department: 'none',
                requestDate: '0000-00-00'
            },
            UserRequestTableColumns: [
                {
                    columnType: 'Request Type',
                    columnClass: ''
                },
                {
                    columnType: 'RequestedBy',
                    columnClass: ''
                },
                {
                    columnType: 'Description',
                    columnClass: ''
                },
                {
                    columnType: 'Department',
                    columnClass: 'column-display'
                },
                {
                    columnType: 'Request Level',
                    columnClass: 'column-display'
                },
                {
                    columnType: 'Request Date',
                    columnClass: 'column-display'
                },
                {
                    columnType: 'Status',
                    columnClass: 'column-display'
                },
                {
                    columnType: 'Details',
                    columnClass: ''
                },
            ],
        }
        this.handleFilterInput = this.handleFilterInput.bind(this);
        this.filter = this.filter.bind(this);
        this.exitModal = this.exitModal.bind(this);
        this.showDetailsModal = this.showDetailsModal.bind(this);
        this.closeDetailsModal = this.closeDetailsModal.bind(this);
        this.approveRequest = this.approveRequest.bind(this);
        this.disapproveRequest = this.disapproveRequest.bind(this);
        this.resolveRequest = this.resolveRequest.bind(this);
    }
    componentDidMount() {
        const { getAdminRequests } = this.props;
        getAdminRequests();
    }
    componentDidUpdate(prevProps, prevState) {
        const { getAdminRequests } = this.props;
        const { approve, resolve, disapprove } = this.props;
        if (approve || resolve || disapprove) {
            getAdminRequests();
        }
    }
    componentWillReceiveProps(nextProps) {
        const { newRequest } = this.props;
        if (nextProps.approve || nextProps.resolve || nextProps.disapprove) {
            this.setState({ displayStyle: { display: 'none' } })
            newRequest();
        }
    }
    closeDetailsModal() {
        this.setState({ displayStyle: { display: 'none' } })
    }
    exitModal(event) {
        const requestModal = document.getElementById('modal');
        const detailsModal = document.getElementById('detailsModal');
        if (event.target === requestModal) {
            this.setState({ style: { display: 'none' } })
        }
        if (event.target === detailsModal) {
            this.setState({ displayStyle: { display: 'none' } })
        }
    }
    showDetailsModal(event) {
        const { getRequest } = this.props;
        getRequest(event.target.value);
        this.setState(
            {
                errorText: '',
                displayStyle: { display: 'block' },
            })
    }
    filter() {
        const { filterData } = this.state;
        const { filterRequests } = this.props;
        filterRequests(filterData);
    }
    approveRequest(event) {
        event.preventDefault();
        const { approveRequest, request } = this.props;
        approveRequest(request.requestId);
    }
    disapproveRequest(event) {
        event.preventDefault();
        const { disapproveRequest, request } = this.props;
        disapproveRequest(request.requestId);
    }
    resolveRequest(event) {
        event.preventDefault();
        const { resolveRequest, request } = this.props;
        resolveRequest(request.requestId);
    }
    handleFilterInput(event) {
        event.preventDefault();
        const { filterData } = this.state;
        this.setState({
            filterData: {
                ...filterData,
                [event.target.id]: event.target.value,
            },
        });
    }
    render() {
        const { UserRequestTableColumns, requestRowClass,
            textMarginClass, textInfoClass, displayStyle } = this.state;
        const { role, requests, request } = this.props;
        return (
            <RequestView
                UserRequestTableColumns={UserRequestTableColumns}
                requests={requests}
                role={role}
                requestRowClass={requestRowClass}
                textMarginClass={textMarginClass}
                textInfoClass={textInfoClass}
                handleFilterInput={this.handleFilterInput}
                filter={this.filter}
                showDetailsModal={this.showDetailsModal}
                exitModal={this.exitModal}
                request={request}
                displayStyle={displayStyle}
                closeDetailsModal={this.closeDetailsModal}
                approveRequest={this.approveRequest}
                disapproveRequest={this.disapproveRequest}
                resolveRequest={this.resolveRequest}
            />
        );
    }
}

export const mapStateToProps = (state) => {
    const { requests, filter, request, approve, resolve, disapprove } = state.request;
    const { role } = state.auth;
    return {
        requests,
        role,
        filter,
        request,
        approve,
        resolve,
        disapprove
    };
};
export default connect(mapStateToProps, {
    getAdminRequests: requestAction.getAdminRequests,
    getRequest: requestAction.getRequest,
    filterRequests: requestAction.filterRequests,
    newRequest: requestAction.newRequest,
    approveRequest: requestAction.approveRequest,
    disapproveRequest: requestAction.disapproveRequest,
    resolveRequest: requestAction.resolveRequest
})(AdminRequest);
