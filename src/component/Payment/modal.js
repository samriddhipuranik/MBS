import React, { useState } from "react";
import "./modal.css";
// import payImg from "../../images/payDone.png";
import Confetti from "react-confetti"; 

function Modal({ isOpen, onClose, totalAmount, quantity, ticketType }) {
  const [showConfetti, setShowConfetti] = useState(false); // State variable

  const handlePaymentSuccess = () => {
    setShowConfetti(true); 
  };

  return (
    isOpen && (
      <div className="modal-backdrop">
        {showConfetti && <Confetti />} 
        <div className="modal-card">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2>Total Amount</h2>
          <p>Rs. {totalAmount.toFixed(2)}</p>
          <p>
            <em>Number of seats booked: {quantity}</em>
          </p>
          <p>
            <em>Ticket Type: {ticketType}</em>
          </p>
          <button onClick={handlePaymentSuccess} className="btn_final">Pay</button>
          {/* <img src={payImg} alt="payment done!" /> */}
        </div>
      </div>
    )
  );
}

export default Modal;
