import React from "react";
import "./modal.css";
import payImg from '../../images/payDone.png';

function Modal({ isOpen, onClose, totalAmount,quantity,ticketType }) {
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
          <p><em>Number of seats booked: {quantity}</em></p>
          <p><em>Ticket Type: {ticketType}</em></p>
          <img src={payImg} alt="payment done!"/>
        </div>
      </div>
    )
  );
}

export default Modal;
