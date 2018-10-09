import React from 'react';
const AuthButtonComponent = (props) => {
    const { buttonAttributes } = props;
    return (
        <input
            className={buttonAttributes.btnClass}
            type={buttonAttributes.type}
            value={buttonAttributes.value}
        />
    );
}

export default AuthButtonComponent;