import React from 'react';
import '../App.css'; // We'll use the main CSS file for styling

const SignUpModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default SignUpModal;
