import React from 'react';
const InputComponent = (props) => {
    const { inputClass, type, id, name, placeholder, pattern, title, handleInput} = props;
    return ( 
        <input 
        className={inputClass} 
        type={type} 
        id={id} 
        name={name} 
        placeholder={placeholder} 
        pattern={pattern}
        title={title}
        required
        onChange={handleInput}
        /> 
     );
}
 
export default InputComponent;