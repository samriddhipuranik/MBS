import React, { useState } from "react";
import "./modal.css";
import payImg from "../../images/payDone.png";
import Confetti from "react-confetti"; 

function Modal({ isOpen, onClose, totalAmount, quantity, ticketType }) {
  const [showConfetti, setShowConfetti] = useState(false); // confetti
  const [bookingStatus, setBookingStatus] = useState("Payment Pending"); //booking status

  const handlePaymentSuccess = () => {
    quantity>1?setBookingStatus("Tickets Booked!"):setBookingStatus("Ticket Booked!");
    setShowConfetti(true);
  };

  return (
    // Modal backdrop
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
          {bookingStatus === "Payment Pending" ? (
            <button onClick={handlePaymentSuccess} className="btn_final">Pay</button>
          ) : (
            <div>
            <p><strong>{bookingStatus}</strong></p>
          <img src={payImg} alt="payment done!" />
          </div>
          )}
        </div>
      </div>
    )
  );
}

export default Modal;
