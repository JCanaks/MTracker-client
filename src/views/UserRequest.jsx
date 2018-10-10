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
            requestData: {
                requestType: '',
                requestLevel: '',
                description: ''
            }
        }
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.exitModal = this.exitModal.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.createRequest = this.createRequest.bind(this);

    }

    componentDidUpdate(prevProps, prevState) {
        const { success, getRequests } =this.props;
        if(success){
            getRequests();
        }
        
    }
    componentDidMount() {
        const { success, getRequests } = this.props;
        if(!success){
            getRequests();
        }
    }
    componentWillReceiveProps(nextProps) {
        const {newRequest}= this.props;
        if (nextProps.success) {
            this.setState({ style: { display: 'none' } })
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
        if (event.target === requestModal) {
            this.setState({ style: { display: 'none' } })
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
    closeModal() {
        this.setState({ style: { display: 'none' } })
    }

    render() {
        const { requestRowClass, textMarginClass,
            textInfoClass, hideModal, style,
            requestData, errorText,
            UserRequestTableColumns} = this.state;
        const { role, requests} = this.props;
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
            />
        );
    }
}
export const mapStateToProps = (state) => {
    const { request, success, errors, requests } = state.request;
    const { role } = state.auth;
    return {
        request,
        role,
        success,
        errors,
        requests,
    };
};
export default connect(mapStateToProps, {
    createRequest: requestAction.createRequest,
    newRequest: requestAction.newRequest,
    getRequests: requestAction.getRequests,
})(UserRequest);
