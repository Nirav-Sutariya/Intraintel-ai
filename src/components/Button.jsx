import React from 'react';

const Button = ({ onClick, onSubmit, children, className }) => {
    return (
        <>
            <button type='button' onClick={onClick} className={`text-sm lg:text-xl text-white font-semibold py-3 px-[30px] rounded-xl bg-[#0068E5] hover:bg-[#0053B7] ${className}`}> {children} </button>
        </>
    );
}

export default Button;