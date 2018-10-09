import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthView from '../components/AuthView';
import authAction from '../actions/authAction';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorText: '',
            headerText: 'Sign In',
            inputClass: 'auth-input-class',
            formType: 'Sign in',
            userData: {
                userPassword: '',
                userEmail: '',
            },
            inputTypes: [
                {
                    type: 'email',
                    id: 'userEmail',
                    name: 'email',
                    placeholder: 'Email*',
                },
                {
                    type: 'password',
                    id: 'userPassword',
                    name: 'password',
                    placeholder: 'Password*',
                }
            ],
            buttonAttributes: {
                type: 'submit',
                value: 'Sign in',
                btnClass: 'auth-submit-btn'
            }

        }
        this.handleInput = this.handleInput.bind(this);
        this.login = this.login.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors.message) {
            this.setState({
                errorText:  nextProps.errors.message
            });
        }
    }
    handleInput(event) {
        event.preventDefault();
        const { userData } = this.state;
        this.setState({
            userData: {
                ...userData,
                [event.target.id]: event.target.value,
            },
        });
    }
    login(event) {
        event.preventDefault();
        const{ userData } = this.state; 
        const { login } = this.props;
        login(userData);
        this.setState({
            userData : {
                userPassword: '',
                userEmail: '',
            },
          })
    }
    render() {
        const { headerText, inputClass,
            inputTypes, departments, formType,
            buttonAttributes, errorText } = this.state;
        return (
            <AuthView
                headerText={headerText}
                inputClass={inputClass}
                inputTypes={inputTypes}
                departments={departments}
                formType={formType}
                buttonAttributes={buttonAttributes}
                errorText={errorText}
                handleInput={this.handleInput}
                login={this.login}
            />
        );
    }
}
export const mapStateToProps = (state) => {
    const { errors } = state.auth;
    return {
        errors,
    };
};
export default connect(mapStateToProps, {
    login: authAction.login,
})(Login);