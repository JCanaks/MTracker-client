import React, { Component } from 'react';
import { connect } from 'react-redux';
import RequestView from '../components/RequestView';
import requestAction from '../actions/requestAction';

class UserRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorText: '',
            requestRowClass: 'request-top-row',
            textMarginClass: 'text-margin1',
            textInfoClass: 'text-info',
            headerClass: 'header',
            hideModal: true,
            UserRequestTableColumns: [
                {
                    columnType: 'Request Type',
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
            style: {
                display: 'none'
            },
            displayStyle: {
                display: 'none'
            },
            requestData: {
                requestType: '',
                requestLevel: '',
                description: ''
            },
            updateData: {
                requestId: 0,
                requestTypeDetails: '',
                requestLevelDetails: '',
                descriptionDetails: ''
            },
        }
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.exitModal = this.exitModal.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.createRequest = this.createRequest.bind(this);
        this.showDetailsModal = this.showDetailsModal.bind(this);
        this.closeDetailsModal = this.closeDetailsModal.bind(this);
        this.search = this.search.bind(this);
        this.updateRequest = this.updateRequest.bind(this);
        this.handleUpdateInput = this.handleUpdateInput.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        const { success, getRequests, updated, request } = this.props;
        if (success || updated) {
            getRequests();
        }
    }
    componentDidMount() {
        const { success, getRequests } = this.props;
        if (!success) {
            getRequests();
        }
    }
    componentWillReceiveProps(nextProps) {
        const { newRequest, request } = this.props;
        if (nextProps.request !== request) {
            this.setState({
                updateData: {
                    requestId: nextProps.request.requestId,
                    requestTypeDetails: nextProps.request.requestType
                        ? nextProps.request.requestType : '',
                    requestLevelDetails: nextProps.request.requestLevel
                        ? nextProps.request.requestLevel : '',
                    descriptionDetails: nextProps.request.description
                        ? nextProps.request.description : '',
                }
            })
        }
        if (nextProps.success || nextProps.updated) {
            this.setState({ style: { display: 'none' } })
            newRequest();
        }
        if (nextProps.updated) {
            this.setState({ displayStyle: { display: 'none' } })
            newRequest();
        }
        if (Array.isArray(nextProps.errors.message.details)) {
            this.setState({
                errorText: nextProps.errors.message.details[0].message
            })
        } else {
            this.setState({
                errorText: nextProps.errors.message
            })
        }
    }
    handleUpdateInput(event) {
        event.preventDefault();
        const { updateData } = this.state;
        this.setState({
            updateData: {
                ...updateData,
                [event.target.id]: event.target.value,
            },
        });

    }
    updateRequest(event) {
        event.preventDefault();
        const { updateRequest } = this.props;
        const { updateData } = this.state;
        const updateValues = {
            requestType: updateData.requestTypeDetails,
            requestLevel: updateData.requestLevelDetails,
            description: updateData.descriptionDetails,
        }
        const requestId = updateData.requestId;
        updateRequest(requestId, updateValues)
    }
    createRequest(event) {
        event.preventDefault();
        const { requestData } = this.state;
        const { createRequest, getRequests } = this.props;
        createRequest(requestData);
    }
    handleInput(event) {
        event.preventDefault();
        const { requestData } = this.state;
        this.setState({
            requestData: {
                ...requestData,
                [event.target.id]: event.target.value,
            },
        });

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
    showModal(event) {
        const { newRequest } = this.props;
        document.getElementById('requestType').selectedIndex = 0;
        document.getElementById('requestLevel').selectedIndex = 0;
        document.getElementById('description').value = "";
        newRequest();
        this.setState(
            {
                errorText: '',
                style: { display: 'block' },
            })
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
    closeModal() {
        this.setState({ style: { display: 'none' } })
    }
    closeDetailsModal() {
        this.setState({ displayStyle: { display: 'none' } })
    }
    search(event) {
        event.preventDefault();
        const searchValue = event.target.value.toUpperCase();
        const table = document.getElementById('requestTable');
        const tr = table.getElementsByTagName('tr');
        for (let item of tr) {
            const column1 = item.getElementsByTagName('td')[0];
            const column2 = item.getElementsByTagName('td')[1];
            const column3 = item.getElementsByTagName('td')[2];
            const column4 = item.getElementsByTagName('td')[3];
            const column5 = item.getElementsByTagName('td')[4];
            const column6 = item.getElementsByTagName('td')[5];

            if (column1 && column2 && column3 && column4 && column5 && column6) {
                if (column1.innerHTML.toUpperCase().indexOf(searchValue) > -1
                    || column2.innerHTML.toUpperCase().indexOf(searchValue) > -1
                    || column3.innerHTML.toUpperCase().indexOf(searchValue) > -1
                    || column4.innerHTML.toUpperCase().indexOf(searchValue) > -1
                    || column5.innerHTML.toUpperCase().indexOf(searchValue) > -1
                    || column6.innerHTML.toUpperCase().indexOf(searchValue) > -1
                ) {
                    item.style.display = '';
                }
                else {
                    item.style.display = 'none';
                }
            }
        }
    }
    render() {
        const { requestRowClass, textMarginClass,
            textInfoClass, hideModal, style, errorText,
            UserRequestTableColumns, displayStyle,
            updateData } = this.state;
        const { role, requests, request } = this.props;
        return (
            <RequestView
                requestRowClass={requestRowClass}
                textMarginClass={textMarginClass}
                textInfoClass={textInfoClass}
                role={role}
                hideModal={hideModal}
                style={style}
                showModal={this.showModal}
                closeModal={this.closeModal}
                exitModal={this.exitModal}
                handleInput={this.handleInput}
                createRequest={this.createRequest}
                errorText={errorText}
                UserRequestTableColumns={UserRequestTableColumns}
                requests={requests}
                showDetailsModal={this.showDetailsModal}
                displayStyle={displayStyle}
                closeDetailsModal={this.closeDetailsModal}
                request={request}
                search={this.search}
                updateRequest={this.updateRequest}
                handleUpdateInput={this.handleUpdateInput}
                updateData={updateData}
            />
        );
    }
}
export const mapStateToProps = (state) => {
    const { request, success, errors, requests, updated } = state.request;
    const { role } = state.auth;
    return {
        request,
        role,
        success,
        errors,
        requests,
        updated,
    };
};
export default connect(mapStateToProps, {
    createRequest: requestAction.createRequest,
    newRequest: requestAction.newRequest,
    getRequests: requestAction.getRequests,
    getRequest: requestAction.getRequest,
    updateRequest: requestAction.updateRequest,
})(UserRequest);
