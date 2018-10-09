import React from 'react';
import AuthHeader from './AuthHeader';
import InputComponent from './InputComponent';
import AuthButtonComponent from './AuthButtonComponent';

const AuthForm = (props) => {
    const { headerText, inputClass, inputTypes,
        departments, formType, buttonAttributes,
        signup, errorText, handleInput, login } = props; 
    return (
        <form onSubmit={signup ? signup : login}>
            <div className="form-flex">
                <AuthHeader headerText={headerText} />
                <h3>Simple, easy to use, Maintenance System</h3>
                {
                    inputTypes.map((inputType, index) => (
                        <InputComponent
                            key={index}
                            inputClass={inputClass}
                            type={inputType.type}
                            id={inputType.id}
                            name={inputType.name}
                            placeholder={inputType.placeholder}
                            pattern={inputType.pattern}
                            title={inputType.title}
                            handleInput={handleInput}
                        />
                    ))

                }
                {
                    formType == 'Sign up' ? (
                        <select className="auth-select-class" id="department" onChange={handleInput} required>
                            <option value="" >Select Department</option>
                            {
                                departments.map((department, index) => (
                                    <option key={index}
                                        value={department}
                                    >
                                        {department}
                                    </option>

                                ))
                            }
                        </select>
                    ) : ""
                }
                {
                    formType == 'Sign up' ? (
                        <div className="format">
                            *password - min 8 chars and max 12. Can only include symbols (#*/_@)
           </div>) : ""
                }
                <AuthButtonComponent
                    buttonAttributes={buttonAttributes}
                />
                <p className="auth-info" >{errorText}</p>
            </div>
        </form>
    );
}


export default AuthForm;
