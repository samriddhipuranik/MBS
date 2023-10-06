import React from 'react';
import './modal.css'

function Modal({ isOpen, onClose, totalAmount }) {
  return (
    // Modal backdrop
    isOpen && (
      <div className="modal-backdrop">
        <div className="modal-card">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2>Total Amount</h2>
          <p>Rs. {totalAmount.toFixed(2)}</p>
        </div>
      </div>
    )
  );
}

export default Modal;
