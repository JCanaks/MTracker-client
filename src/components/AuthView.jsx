import React from 'react';
import AuthForm from './AuthForm';
const AuthView = (props) => {
    const { headerText, inputClass, 
        inputTypes, departments, formType,
         buttonAttributes, signup, errorText,
         handleInput,login} = props;
    return (
        <div className={formType=='Sign up'?"signup-body":"signin-body"}>
            <AuthForm
                headerText={headerText}
                inputClass={inputClass}
                inputTypes={inputTypes}
                departments={departments}
                formType={formType}
                buttonAttributes={buttonAttributes}
                signup={signup}
                errorText={errorText}
                handleInput={handleInput}
                login={login}
            />
        </div>
    );
}

export default AuthView;
