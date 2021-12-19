import React from 'react';
import'./Button.css';

const Button = ({ children, clickHandler, disabled }) => {
    return (
        <button
            className='button'
            type='button'
            onClick={clickHandler}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;