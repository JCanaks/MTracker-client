import React from 'react';
import AuthForm from './AuthForm';
const AuthView = (props) => {
    const { headerText, inputClass, 
        inputTypes, departments, formType,
         buttonAttributes, signup, errorText,
         handleInput,} = props;
    return (
        <div className="signup-body">
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
            />
        </div>
    );
}

export default AuthView;
