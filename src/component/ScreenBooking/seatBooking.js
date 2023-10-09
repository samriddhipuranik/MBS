import { useState } from "react";
import { nanoid } from "nanoid";
import "./seating.css";
import screenImg from "../../images/screen.png";
import Modal from "../Payment/modal";

var array = [
  { id: nanoid(), num: 1, type: "premium" },
  { id: nanoid(), num: 2, type: "premium" },
  { id: nanoid(), num: 3, type: "premium" },
  { id: nanoid(), num: 4, type: "premium" },
  { id: nanoid(), num: 5, type: "premium" },
];
var array1 = [
  { id: nanoid(), num: 6, type: "premium" },
  { id: nanoid(), num: 7, type: "premium", isUnavailable: "true" },
  { id: nanoid(), num: 8, type: "premium" },
  { id: nanoid(), num: 9, type: "premium" },
  { id: nanoid(), num: 10, type: "premium" },
  { id: nanoid(), num: 11, type: "premium" },
];
var A = [
  { id: nanoid(), num: 1, type: "premium" },
  { id: nanoid(), num: 2, type: "premium" },
  { id: nanoid(), num: 3, type: "premium" },
  { id: nanoid(), num: 4, type: "premium" },
  { id: nanoid(), num: 5, type: "premium" },
  { id: nanoid(), num: 6, type: "premium" },
  { id: nanoid(), num: 7, type: "premium" },
  { id: nanoid(), num: 8, type: "premium" },
];
var a = [
  { id: nanoid(), num: 9, type: "premium" },
  { id: nanoid(), num: 10, type: "premium" },
  { id: nanoid(), num: 11, type: "premium" },
  { id: nanoid(), num: 12, type: "premium" },
  { id: nanoid(), num: 13, type: "premium" },
  { id: nanoid(), num: 14, type: "premium" },
  { id: nanoid(), num: 15, type: "premium" },
  { id: nanoid(), num: 16, type: "premium" },
];

var B = [
  { id: nanoid(), num: 1, type: "premium", isUnavailable: "true" },
  { id: nanoid(), num: 2, type: "premium" },
  { id: nanoid(), num: 3, type: "premium" },
  { id: nanoid(), num: 4, type: "premium" },
  { id: nanoid(), num: 5, type: "premium" },
  { id: nanoid(), num: 6, type: "premium" },
  { id: nanoid(), num: 7, type: "premium" },
  { id: nanoid(), num: 8, type: "premium" },
];
var b = [
  { id: nanoid(), num: 9, type: "premium" },
  { id: nanoid(), num: 10, type: "premium" },
  { id: nanoid(), num: 11, type: "premium" },
  { id: nanoid(), num: 12, type: "premium" },
  { id: nanoid(), num: 13, type: "premium" },
  { id: nanoid(), num: 14, type: "premium" },
  { id: nanoid(), num: 15, type: "premium" },
  { id: nanoid(), num: 16, type: "premium" },
];

var C = [
  { id: nanoid(), num: 1, type: "premium" },
  { id: nanoid(), num: 2, type: "premium" },
  { id: nanoid(), num: 3, type: "premium" },
  { id: nanoid(), num: 4, type: "premium" },
  { id: nanoid(), num: 5, type: "premium" },
  { id: nanoid(), num: 6, type: "premium" },
  { id: nanoid(), num: 7, type: "premium" },
  { id: nanoid(), num: 8, type: "premium", isUnavailable: "true" },
];
var c = [
  { id: nanoid(), num: 9, type: "premium" },
  { id: nanoid(), num: 10, type: "premium" },
  { id: nanoid(), num: 11, type: "premium" },
  { id: nanoid(), num: 12, type: "premium" },
  { id: nanoid(), num: 13, type: "premium" },
  { id: nanoid(), num: 14, type: "premium" },
  { id: nanoid(), num: 15, type: "premium" },
  { id: nanoid(), num: 16, type: "premium" },
];

var D = [
  { id: nanoid(), num: 1, type: "premium" },
  { id: nanoid(), num: 2, type: "premium" },
  { id: nanoid(), num: 3, type: "premium" },
  { id: nanoid(), num: 4, type: "premium" },
  { id: nanoid(), num: 5, type: "premium" },
  { id: nanoid(), num: 6, type: "premium", isUnavailable: "true" },
  { id: nanoid(), num: 7, type: "premium" },
  { id: nanoid(), num: 8, type: "premium" },
];
var d = [
  { id: nanoid(), num: 9, type: "premium" },
  { id: nanoid(), num: 10, type: "premium" },
  { id: nanoid(), num: 11, type: "premium" },
  { id: nanoid(), num: 12, type: "premium" },
  { id: nanoid(), num: 13, type: "premium" },
  { id: nanoid(), num: 14, type: "premium" },
  { id: nanoid(), num: 15, type: "premium" },
  { id: nanoid(), num: 16, type: "premium" },
];

var E = [
  { id: nanoid(), num: 1, type: "premium" },
  { id: nanoid(), num: 2, type: "premium" },
  { id: nanoid(), num: 3, type: "premium" },
  { id: nanoid(), num: 4, type: "premium" },
  { id: nanoid(), num: 5, type: "premium" },
  { id: nanoid(), num: 6, type: "premium" },
  { id: nanoid(), num: 7, type: "premium" },
  { id: nanoid(), num: 8, type: "premium" },
];
var e = [
  { id: nanoid(), num: 9, type: "premium" },
  { id: nanoid(), num: 10, type: "premium" },
  { id: nanoid(), num: 11, type: "premium" },
  { id: nanoid(), num: 12, type: "premium" },
  { id: nanoid(), num: 13, type: "premium" },
  { id: nanoid(), num: 14, type: "premium" },
  { id: nanoid(), num: 15, type: "premium" },
  { id: nanoid(), num: 16, type: "premium" },
];

var F = [
  { id: nanoid(), num: 1, type: "standard" },
  { id: nanoid(), num: 2, type: "standard" },
  { id: nanoid(), num: 3, type: "standard" },
  { id: nanoid(), num: 4, type: "standard" },
  { id: nanoid(), num: 5, type: "standard" },
  { id: nanoid(), num: 6, type: "standard" },
  { id: nanoid(), num: 7, type: "standard" },
  { id: nanoid(), num: 8, type: "standard" },
];
var f = [
  { id: nanoid(), num: 9, type: "standard" },
  { id: nanoid(), num: 10, type: "standard" },
  { id: nanoid(), num: 11, type: "standard" },
  { id: nanoid(), num: 12, type: "standard" },
  { id: nanoid(), num: 13, type: "standard" },
  { id: nanoid(), num: 14, type: "standard" },
  { id: nanoid(), num: 15, type: "standard" },
  { id: nanoid(), num: 16, type: "standard" },
];

var G = [
  { id: nanoid(), num: 1, type: "standard" },
  { id: nanoid(), num: 2, type: "standard" },
  { id: nanoid(), num: 3, type: "standard" },
  { id: nanoid(), num: 4, type: "standard" },
  { id: nanoid(), num: 5, type: "standard" },
  { id: nanoid(), num: 6, type: "standard" },
  { id: nanoid(), num: 7, type: "standard" },
  { id: nanoid(), num: 8, type: "standard" },
];
var g = [
  { id: nanoid(), num: 9, type: "standard" },
  { id: nanoid(), num: 10, type: "standard" },
  { id: nanoid(), num: 11, type: "standard" },
  { id: nanoid(), num: 12, type: "standard" },
  { id: nanoid(), num: 13, type: "standard" },
  { id: nanoid(), num: 14, type: "standard" },
  { id: nanoid(), num: 15, type: "standard" },
  { id: nanoid(), num: 16, type: "standard" },
];

var H = [
  { id: nanoid(), num: 1, type: "standard" },
  { id: nanoid(), num: 2, type: "standard" },
  { id: nanoid(), num: 3, type: "standard" },
  { id: nanoid(), num: 4, type: "standard" },
  { id: nanoid(), num: 5, type: "standard" },
  { id: nanoid(), num: 6, type: "standard" },
  { id: nanoid(), num: 7, type: "standard" },
  { id: nanoid(), num: 8, type: "standard" },
];
var h = [
  { id: nanoid(), num: 9, type: "standard" },
  { id: nanoid(), num: 10, type: "standard" },
  { id: nanoid(), num: 11, type: "standard" },
  { id: nanoid(), num: 12, type: "standard" },
  { id: nanoid(), num: 13, type: "standard" },
  { id: nanoid(), num: 14, type: "standard" },
  { id: nanoid(), num: 15, type: "standard" },
  { id: nanoid(), num: 16, type: "standard" },
];

var I = [
  { id: nanoid(), num: 1, type: "standard" },
  { id: nanoid(), num: 2, type: "standard" },
  { id: nanoid(), num: 3, type: "standard" },
  { id: nanoid(), num: 4, type: "standard" },
  { id: nanoid(), num: 5, type: "standard" },
  { id: nanoid(), num: 6, type: "standard" },
  { id: nanoid(), num: 7, type: "standard" },
  { id: nanoid(), num: 8, type: "standard" },
];
var i = [
  { id: nanoid(), num: 9, type: "standard" },
  { id: nanoid(), num: 10, type: "standard" },
  { id: nanoid(), num: 11, type: "standard" },
  { id: nanoid(), num: 12, type: "standard", isUnavailable: "true" },
  { id: nanoid(), num: 13, type: "standard" },
  { id: nanoid(), num: 14, type: "standard" },
  { id: nanoid(), num: 15, type: "standard" },
  { id: nanoid(), num: 16, type: "standard" },
];

var J = [
  { id: nanoid(), num: 1, type: "standard" },
  { id: nanoid(), num: 2, type: "standard" },
  { id: nanoid(), num: 3, type: "standard" },
  { id: nanoid(), num: 4, type: "standard" },
  { id: nanoid(), num: 5, type: "standard" },
  { id: nanoid(), num: 6, type: "standard" },
  { id: nanoid(), num: 7, type: "standard" },
  { id: nanoid(), num: 8, type: "standard" },
];
var j = [
  { id: nanoid(), num: 9, type: "standard" },
  { id: nanoid(), num: 10, type: "standard" },
  { id: nanoid(), num: 11, type: "standard" },
  { id: nanoid(), num: 12, type: "standard" },
  { id: nanoid(), num: 13, type: "standard" },
  { id: nanoid(), num: 14, type: "standard" },
  { id: nanoid(), num: 15, type: "standard" },
  { id: nanoid(), num: 16, type: "standard" },
];
var K = [
  { id: nanoid(), num: 1, type: "standard" },
  { id: nanoid(), num: 2, type: "standard" },
  { id: nanoid(), num: 3, type: "standard" },
  { id: nanoid(), num: 4, type: "standard" },
  { id: nanoid(), num: 5, type: "standard" },
  { id: nanoid(), num: 6, type: "standard" },
  { id: nanoid(), num: 7, type: "standard" },
  { id: nanoid(), num: 8, type: "standard" },
];
var k = [
  { id: nanoid(), num: 9, type: "standard" },
  { id: nanoid(), num: 10, type: "standard" },
  { id: nanoid(), num: 11, type: "standard" },
  { id: nanoid(), num: 12, type: "standard" },
  { id: nanoid(), num: 13, type: "standard" },
  { id: nanoid(), num: 14, type: "standard" },
  { id: nanoid(), num: 15, type: "standard" },
  { id: nanoid(), num: 16, type: "standard" },
];

var L = [
  { id: nanoid(), num: 1, type: "standard" },
  { id: nanoid(), num: 2, type: "standard" },
  { id: nanoid(), num: 3, type: "standard" },
  { id: nanoid(), num: 4, type: "standard" },
  { id: nanoid(), num: 5, type: "standard" },
  { id: nanoid(), num: 6, type: "standard" },
  { id: nanoid(), num: 7, type: "standard" },
  { id: nanoid(), num: 8, type: "standard" },
];
var l = [
  { id: nanoid(), num: 9, type: "standard" },
  { id: nanoid(), num: 10, type: "standard" },
  { id: nanoid(), num: 11, type: "standard" },
  { id: nanoid(), num: 12, type: "standard" },
  { id: nanoid(), num: 13, type: "standard" },
  { id: nanoid(), num: 14, type: "standard" },
  { id: nanoid(), num: 15, type: "standard" },
  { id: nanoid(), num: 16, type: "standard" },
];

var M = [
  { id: nanoid(), num: 1, type: "standard" },
  { id: nanoid(), num: 2, type: "standard" },
  { id: nanoid(), num: 3, type: "standard" },
  { id: nanoid(), num: 4, type: "standard" },
  { id: nanoid(), num: 5, type: "standard" },
  { id: nanoid(), num: 6, type: "standard", isUnavailable: "true" },
  { id: nanoid(), num: 7, type: "standard" },
  { id: nanoid(), num: 8, type: "standard" },
];
var m = [
  { id: nanoid(), num: 9, type: "standard" },
  { id: nanoid(), num: 10, type: "standard" },
  { id: nanoid(), num: 11, type: "standard" },
  { id: nanoid(), num: 12, type: "standard" },
  { id: nanoid(), num: 13, type: "standard" },
  { id: nanoid(), num: 14, type: "standard" },
  { id: nanoid(), num: 15, type: "standard" },
  { id: nanoid(), num: 16, type: "standard" },
];

var N = [
  { id: nanoid(), num: 1, type: "standard" },
  { id: nanoid(), num: 2, type: "standard" },
  { id: nanoid(), num: 3, type: "standard" },
  { id: nanoid(), num: 4, type: "standard" },
  { id: nanoid(), num: 5, type: "standard" },
  { id: nanoid(), num: 6, type: "standard" },
  { id: nanoid(), num: 7, type: "standard" },
  { id: nanoid(), num: 8, type: "standard" },
];
var n = [
  { id: nanoid(), num: 9, type: "standard" },
  { id: nanoid(), num: 10, type: "standard" },
  { id: nanoid(), num: 11, type: "standard" },
  { id: nanoid(), num: 12, type: "standard" },
  { id: nanoid(), num: 13, type: "standard" },
  { id: nanoid(), num: 14, type: "standard" },
  { id: nanoid(), num: 15, type: "standard" },
  { id: nanoid(), num: 16, type: "standard" },
];

var O = [
  { id: nanoid(), num: 1, type: "standard" },
  { id: nanoid(), num: 2, type: "standard" },
  { id: nanoid(), num: 3, type: "standard" },
  { id: nanoid(), num: 4, type: "standard" },
  { id: nanoid(), num: 5, type: "standard" },
  { id: nanoid(), num: 6, type: "standard" },
  { id: nanoid(), num: 7, type: "standard" },
  { id: nanoid(), num: 8, type: "standard" },
];
var o = [
  { id: nanoid(), num: 9, type: "standard", isUnavailable: true },
  { id: nanoid(), num: 10, type: "standard",isUnavailable: true },
  { id: nanoid(), num: 11, type: "standard" },
  { id: nanoid(), num: 12, type: "standard" },
  { id: nanoid(), num: 13, type: "standard" },
  { id: nanoid(), num: 14, type: "standard" },
  { id: nanoid(), num: 15, type: "standard" },
  { id: nanoid(), num: 16, type: "standard" },
];

function Seating() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [ticketType, setTicketType] = useState("premium");
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const rows = [
    array,
    array1,
    A,
    a,
    B,
    b,
    C,
    c,
    D,
    d,
    E,
    e,
    F,
    f,
    G,
    g,
    H,
    h,
    I,
    i,
    J,
    j,
    K,
    k,
    L,
    l,
    M,
    m,
    N,
    n,
    O,
    o,
  ];

  const calculateTotalPrice = () => {
    const ticketPrices = {
      standard: 360,
      premium: 580,
    };

    const subtotal = ticketPrices[ticketType] * quantity;

    return subtotal;
  };

  const handleProceedToPayment = () => {
    if (selectedSeats.length > 0) {
      const total = calculateTotalPrice();
      setTotalAmount(total); // Set the total amount
      setIsModalOpen(true);
    } else {
      alert("Please select at least one seat before proceeding to payment.");
    }
  };
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    window.location.reload();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleQuantityChange = (event) => {
    const selectedQuantity = parseInt(event.target.value, 10); // Parse the selected value to an integer
    setQuantity(selectedQuantity); // Update the quantity state
  };

  const selectSeatsByDefault = (el) => {
    // If the last seat is already selected or the clicked seat is unavailable, return without doing anything
    if (selectedSeats.length === quantity || el.isUnavailable) {
      return;
    }

    let updatedSelectedSeats = [...selectedSeats];

    // Find the row of the clicked seat
    let clickedRow = null;
    for (const row of rows) {
      if (row.includes(el)) {
        clickedRow = row;
        break;
      }
    }

    // Find the index of the clicked seat in the row
    const seatIndex = clickedRow.findIndex((seat) => seat.id === el.id);

    // Iterate through the current row and select seats
    for (let i = seatIndex; i < clickedRow.length; i++) {
      const seat = clickedRow[i];

      // If the seat is unavailable or already selected, stop the loop
      if (seat.isUnavailable || updatedSelectedSeats.includes(seat.id)) {
        break;
      }

      // Select the seat
      updatedSelectedSeats.push(seat.id);

      // If enough seats are selected, break out of the loop
      if (updatedSelectedSeats.length >= quantity) {
        break;
      }
    }

    // Update the selectedSeats state
    setSelectedSeats(updatedSelectedSeats);
  };

  const toggleColor = (el) => {
    const seatUnique = el.id;

    // Check if the seat is already selected
    if (selectedSeats.includes(seatUnique)) {
      // Deselect the seat
      setSelectedSeats(selectedSeats.filter((id) => id !== seatUnique));
    } else {
      // If the last seat is already selected or the clicked seat is unavailable, return without doing anything
      if (selectedSeats.length === quantity || el.isUnavailable) {
        return;
      }

      // Select the seat
      setSelectedSeats([...selectedSeats, seatUnique]);
    }
  };

  const handleClick = (el) => {
    selectSeatsByDefault(el);
    selectedSeats.forEach((seatId) => {
      const seat = rows.flat().find((seat) => seat.id === seatId);
      toggleColor(seat);
    });
  };
  const isSeatDisabled = (seatType) => {
    if (!ticketType) {
      return false;
    }
    return ticketType !== seatType;
  };

  const options = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    timeZone: "Asia/Kolkata",
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  };

  const time = new Date().toLocaleTimeString("en-US", options);
  return (
    <div>
      <div className="timeDate">
        <p> {time}</p>
      </div>
      <br></br>
      <div className="options">
        <form>
          <div
            className="form-group"
            style={{ display: "inline-block", marginRight: "20px" }}
          >
            <label htmlFor="ticketType">Ticket Type</label>
            <select
              id="ticketType"
              name="ticketType"
              value={ticketType}
              onChange={(e) => setTicketType(e.target.value)}
            >
              <option value="standard">standard</option>
              <option value="premium">premium</option>
            </select>
          </div>
          <div className="form-group" style={{ display: "inline-block" }}>
            <label htmlFor="quantity">
              <abbr title="Quantity">Qty</abbr>
            </label>
            <select
              id="quantity"
              name="quantity"
              onChange={handleQuantityChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </form>
      </div>
      <div className="main">
        <div className="seatLayout">
          <ul>
            <h4>Key to Seat Layout :</h4>
            <li>
              <div className="numberBox"></div>
              <span>Available seat</span>
            </li>
            <li>
              <div
                className="numberBox"
                style={{ background: "#c32424", pointerEvents: "none" }}
              ></div>
              <span>Sold seat</span>
            </li>
            <li>
              <div
                className="numberBox"
                style={{ background: "var(--custom-gradient-green)" }}
              ></div>
              <span>Your selection</span>
            </li>
          </ul>
        </div>
        <div className="reclinerMovie">
          <div className="spacedPRow">PREMIUM Rs.580.00</div>
          <div className="rRow">
            <div className="namingSeat">R</div>
            <div className="lRowBox">
              {array.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
            <div className="rRowBox">
              {array1.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="reclinerMovie">
          <div className="spacedPRow"></div>

          <div className="rRow">
            <div className="namingSeat">P</div>
            <div className="pRowBox">
              {A.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el)}
                >
                  {el.num}
                </span>
              ))}
            </div>

            <div className="pRRowBox">
              {a.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
          </div>

          <div className="rRow">
            <div className="namingSeat">O</div>
            <div className="pRowBox">
              {B.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
            <div className="pRRowBox">
              {b.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
          </div>

          <div className="rRow">
            <div className="namingSeat">N</div>
            <div className="pRowBox">
              {C.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
            <div className="pRRowBox">
              {c.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
          </div>

          <div className="rRow">
            <div className="namingSeat">M</div>
            <div className="pRowBox">
              {D.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
            <div className="pRRowBox">
              {d.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
          </div>

          <div className="rRow">
            <div className="namingSeat">L</div>
            <div className="pRowBox">
              {E.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
            <div className="pRRowBox">
              {e.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="reclinerMovie">
          <div className="spacedPRow">STANDARD Rs.360.00</div>

          <div className="rRow">
            <div className="namingSeat">J</div>
            <div className="pRowBox">
              {F.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>

            <div className="pRRowBox">
              {f.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
          </div>

          <div className="rRow">
            <div className="namingSeat">I</div>
            <div className="pRowBox">
              {G.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
            <div className="pRRowBox">
              {g.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
          </div>

          <div className="rRow">
            <div className="namingSeat">H</div>
            <div className="pRowBox">
              {H.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
            <div className="pRRowBox">
              {h.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
          </div>

          <div className="rRow">
            <div className="namingSeat">G</div>
            <div className="pRowBox">
              {I.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
            <div className="pRRowBox">
              {i.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
          </div>

          <div className="rRow">
            <div className="namingSeat">F</div>
            <div className="pRowBox">
              {J.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
            <div className="pRRowBox">
              {j.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
          </div>

          <div className="rRow">
            <div className="namingSeat">E</div>
            <div className="pRowBox">
              {K.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
            <div className="pRRowBox">
              {k.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
          </div>

          <div className="rRow">
            <div className="namingSeat">D</div>
            <div className="pRowBox">
              {L.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${isSeatDisabled(el.type) ? "disabled" : ""}`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
            <div className="pRRowBox">
              {l.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
          </div>

          <div className="rRow">
            <div className="namingSeat">C</div>
            <div className="pRowBox">
              {M.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", cursor: "not-allowed" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
            <div className="pRRowBox">
              {m.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
          </div>

          <div className="rRow">
            <div className="namingSeat">B</div>
            <div className="pRowBox">
              {N.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
            <div className="pRRowBox">
              {n.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
          </div>

          <div className="rRow">
            <div className="namingSeat">A</div>
            <div className="pRowBox">
              {O.map((el) => (
                <span
                  key={el.id}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  onClick={() => handleClick(el, ticketType)}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                >
                  {el.num}
                </span>
              ))}
            </div>
            <div className="pRRowBox">
              {o.map((el) => (
                <span
                  key={el.num}
                  className={`numberBox ${
                    selectedSeats.includes(el.id) ? "selected" : ""
                  } ${
                    el.type ? (isSeatDisabled(el.type) ? "disabled" : "") : ""
                  }`}
                  style={
                    el.isUnavailable
                      ? { background: "#c32424", pointerEvents: "none" }
                      : {}
                  }
                  onClick={() => handleClick(el, ticketType)}
                >
                  {el.num}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="imageScreen">
        <img src={screenImg} alt="Screen img" />
        <p>All eyes this way please!</p>
      </div>
      <div className="center">
        <button
          className="pay_btn"
          onClick={handleProceedToPayment}
          disabled={selectedSeats.length !== quantity}
        >
          Proceed to Payment
      <span className="first"></span>
      {/* <span className="second"></span> */}
      <span className="third"></span>
      <span className="fourth"></span>
        </button>

        {/* Display total amount if it's calculated */}
        {totalAmount > 0 && (
          <Modal
            isOpen={isModalOpen}
            totalAmount={totalAmount}
            onClose={closeModal}
            quantity={quantity}
            ticketType={ticketType}
          />
        )}
      </div>
    </div>
  );
}

export default Seating;
