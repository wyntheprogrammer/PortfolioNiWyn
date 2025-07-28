import React from 'react';

const Alert = ({ message, type }) => {
    return (
        <div
            className={`fixed top-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white text-sm transition-opacity duration-300 z-50 ${type === 'success' ? 'bg-green-500' : 'bg-red-500'
                }`}
        >
            {message}
        </div>

    );
};

export default Alert;
