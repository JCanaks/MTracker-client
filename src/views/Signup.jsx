import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthView from '../components/AuthView';
import authAction from '../actions/authAction';
export class Signup extends Component {
    constructor() {
        super();
        this.state = {
            errorText: '',
            headerText: 'Sign up',
            inputClass: 'auth-input-class',
            formType: 'Sign up',
            departments: [
                'Marketing', 'Sales',
                'Technology', 'Human Resource',
            ],
            userData: {
                userFullname:'',
                userPassword: '',
                department: '',
                userEmail: '',
                userPhonenumber: '',
            },
            inputTypes: [
                {
                    type: 'text',
                    id: 'userFullname',
                    name: 'userFullname',
                    placeholder: 'Full Name*',
                    pattern: '^[A-Za-z\\s]{3,40}$',
                    title: 'Full Name must be alphabets only with min of 3 characters'

                },
                {
                    type: 'email',
                    id: 'userEmail',
                    name: 'email',
                    placeholder: 'Email*',
                },
                {
                    type: 'text',
                    id: 'userPhonenumber',
                    name: 'phonenumber',
                    placeholder: '+2348146614527*',
                    pattern: '\\+234+[0-9]{10,10}$',
                    title: 'Phone Number Entered is not valid'
                },
                {
                    type: 'password',
                    id: 'userPassword',
                    name: 'password',
                    placeholder: 'Password*',
                    pattern: '^[a-zA-Z0-9#*/_@]{8,12}$',
                    title: 'Password Entered does not match specified pattern'
                }
            ],
            buttonAttributes: {
                type: 'submit',
                value: 'Sign up',
                btnClass: 'auth-submit-btn'
            }

        }
        this.signup = this.signup.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (Array.isArray(nextProps.errors.message)) {
            this.setState({
                errorText:  nextProps.errors.message[0].message
            })
        }
        else{
            this.setState({
                errorText:  nextProps.errors.message
            })
        }
    }
    handleInput(event){
        event.preventDefault();
        const { userData }= this.state;
        this.setState({
          userData : {
            ...userData,
            [event.target.id]: event.target.value,
          },
        });
      }
    signup(event) {
        event.preventDefault();
        const{ userData } = this.state; 
        const { signup } = this.props;
        signup(userData);
        this.setState({
            userData : {
                userFullname:'',
                userPassword: '',
                department: '',
                userEmail: '',
                userPhonenumber: '',
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
                signup={this.signup}
                errorText={errorText}
                handleInput={this.handleInput}
            />
        );
    }
}
export const mapStateToProps = (state) => {
    const { signupInfo, errors } = state.auth;
    return {
        signupInfo,
        errors,
    };
};
export default connect(mapStateToProps, {
    signup: authAction.signup,
})(Signup);
