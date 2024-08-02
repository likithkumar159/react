import React, { useState, forwardRef, useImperativeHandle } from 'react';

// Modal component
const Modal = forwardRef((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        open() {
            setIsOpen(true);
        },
        close() {
            setIsOpen(false);
        }
    }));

    if (!isOpen) return null;

    return (
        <div style={styles.modal}>
            <div style={styles.modalContent}>
                <h2>Modal Title</h2>
                <p>Modal content goes here...</p>
                <button onClick={() => setIsOpen(false)}>Close</button>
            </div>
        </div>
    );
});

const styles = {
    modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px'
    }
};

export default Modal;
