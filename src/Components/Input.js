import React from 'react';

const Input = ({ id, label, state, setState, type }) => {
    return (
        <div className='input'>
            <br />
            <input type={type} aria-required="true" className='petit_input' id={id} value={state} onChange={(e) => setState(e.target.value)} placeholder={label} />
        </div>
    );
};

export default Input;