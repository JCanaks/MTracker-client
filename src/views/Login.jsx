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
                errorText: nextProps.errors.message
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
        const { userData } = this.state;
        const { login } = this.props;
        login(userData);
    }
    render() {
        const { isLoading } = this.props;
        const { headerText, inputClass,
            inputTypes, departments, formType,
            buttonAttributes, errorText } = this.state;

        if (isLoading) {
            return (
                <div className="center-image">
                    <div><h1>Loading......</h1></div>
                    <img class="img-size" src="https://res.cloudinary.com/dgwphdxui/image/upload/v1539342988/Mtracker/gear-spiiner.gif" />
                </div>
            )
        }
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
    const { errors, isLoading } = state.auth;
    return {
        errors,
        isLoading,
    };
};
export default connect(mapStateToProps, {
    login: authAction.login,
})(Login);