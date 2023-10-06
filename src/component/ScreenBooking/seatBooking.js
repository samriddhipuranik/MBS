import {  useState } from "react";
import { nanoid } from "nanoid";
import "./seating.css";
import screenImg from '../../images/screen.png';

var array = [{ id: nanoid(), num: 1 }, { id: nanoid(), num: 2 }, { id: nanoid(), num: 3 }, { id: nanoid(), num: 4 }, { id: nanoid(), num: 5 }
];
var array1 = [{ id: nanoid(), num: 6 }, { id: nanoid(), num: 7 }, { id: nanoid(), num: 8 }, { id: nanoid(), num: 9 }, { id: nanoid(), num: 10 },
{ id: nanoid(), num: 11 }];
var A = [{ id: nanoid(), num: 1 }, { id: nanoid(), num: 2 }, { id: nanoid(), num: 3 }, { id: nanoid(), num: 4 }, { id: nanoid(), num: 5 },
{ id: nanoid(), num: 6 }, { id: nanoid(), num: 7 }, { id: nanoid(), num: 8 }];
var a = [{ id: nanoid(), num: 9 }, { id: nanoid(), num: 10 }, { id: nanoid(), num: 11 }, { id: nanoid(), num: 12 }, { id: nanoid(), num: 13 },
{ id: nanoid(), num: 14 }, { id: nanoid(), num: 15 }, { id: nanoid(), num: 16 }];

var B = [{ id: nanoid(), num: 1 }, { id: nanoid(), num: 2 }, { id: nanoid(), num: 3 }, { id: nanoid(), num: 4 }, { id: nanoid(), num: 5 },
{ id: nanoid(), num: 6 }, { id: nanoid(), num: 7 }, { id: nanoid(), num: 8 }];
var b = [{ id: nanoid(), num: 9 }, { id: nanoid(), num: 10 }, { id: nanoid(), num: 11 }, { id: nanoid(), num: 12 }, { id: nanoid(), num: 13 },
{ id: nanoid(), num: 14 }, { id: nanoid(), num: 15 }, { id: nanoid(), num: 16 }];

var C = [{ id: nanoid(), num: 1 }, { id: nanoid(), num: 2 }, { id: nanoid(), num: 3 }, { id: nanoid(), num: 4 }, { id: nanoid(), num: 5 },
{ id: nanoid(), num: 6 }, { id: nanoid(), num: 7 }, { id: nanoid(), num: 8 }];
var c = [{ id: nanoid(), num: 9 }, { id: nanoid(), num: 10 }, { id: nanoid(), num: 11 }, { id: nanoid(), num: 12 }, { id: nanoid(), num: 13 },
{ id: nanoid(), num: 14 }, { id: nanoid(), num: 15 }, { id: nanoid(), num: 16 }];

var D = [{ id: nanoid(), num: 1 }, { id: nanoid(), num: 2 }, { id: nanoid(), num: 3 }, { id: nanoid(), num: 4 }, { id: nanoid(), num: 5 },
{ id: nanoid(), num: 6 }, { id: nanoid(), num: 7 }, { id: nanoid(), num: 8 }];
var d = [{ id: nanoid(), num: 9 }, { id: nanoid(), num: 10 }, { id: nanoid(), num: 11 }, { id: nanoid(), num: 12 }, { id: nanoid(), num: 13 },
{ id: nanoid(), num: 14 }, { id: nanoid(), num: 15 }, { id: nanoid(), num: 16 }];

var E = [{ id: nanoid(), num: 1 }, { id: nanoid(), num: 2 }, { id: nanoid(), num: 3 }, { id: nanoid(), num: 4 }, { id: nanoid(), num: 5 },
{ id: nanoid(), num: 6 }, { id: nanoid(), num: 7 }, { id: nanoid(), num: 8 }];
var e = [{ id: nanoid(), num: 9 }, { id: nanoid(), num: 10 }, { id: nanoid(), num: 11 }, { id: nanoid(), num: 12 }, { id: nanoid(), num: 13 },
{ id: nanoid(), num: 14 }, { id: nanoid(), num: 15 }, { id: nanoid(), num: 16 }];

var F = [{ id: nanoid(), num: 1 }, { id: nanoid(), num: 2 }, { id: nanoid(), num: 3 }, { id: nanoid(), num: 4 }, { id: nanoid(), num: 5 },
{ id: nanoid(), num: 6 }, { id: nanoid(), num: 7 }, { id: nanoid(), num: 8 }];
var f = [{ id: nanoid(), num: 9 }, { id: nanoid(), num: 10 }, { id: nanoid(), num: 11 }, { id: nanoid(), num: 12 }, { id: nanoid(), num: 13 },
{ id: nanoid(), num: 14 }, { id: nanoid(), num: 15 }, { id: nanoid(), num: 16 }];

var G = [{ id: nanoid(), num: 1 }, { id: nanoid(), num: 2 }, { id: nanoid(), num: 3 }, { id: nanoid(), num: 4 }, { id: nanoid(), num: 5 },
{ id: nanoid(), num: 6 }, { id: nanoid(), num: 7 }, { id: nanoid(), num: 8 }];
var g = [{ id: nanoid(), num: 9 }, { id: nanoid(), num: 10 }, { id: nanoid(), num: 11 }, { id: nanoid(), num: 12 }, { id: nanoid(), num: 13 },
{ id: nanoid(), num: 14 }, { id: nanoid(), num: 15 }, { id: nanoid(), num: 16 }];

var H = [{ id: nanoid(), num: 1 }, { id: nanoid(), num: 2 }, { id: nanoid(), num: 3 }, { id: nanoid(), num: 4 }, { id: nanoid(), num: 5 },
{ id: nanoid(), num: 6 }, { id: nanoid(), num: 7 }, { id: nanoid(), num: 8 }];
var h = [{ id: nanoid(), num: 9 }, { id: nanoid(), num: 10 }, { id: nanoid(), num: 11 }, { id: nanoid(), num: 12 }, { id: nanoid(), num: 13 },
{ id: nanoid(), num: 14 }, { id: nanoid(), num: 15 }, { id: nanoid(), num: 16 }];

var I = [{ id: nanoid(), num: 1 }, { id: nanoid(), num: 2 }, { id: nanoid(), num: 3 }, { id: nanoid(), num: 4 }, { id: nanoid(), num: 5 },
{ id: nanoid(), num: 6 }, { id: nanoid(), num: 7 }, { id: nanoid(), num: 8 }];
var i = [{ id: nanoid(), num: 9 }, { id: nanoid(), num: 10 }, { id: nanoid(), num: 11 }, { id: nanoid(), num: 12 }, { id: nanoid(), num: 13 },
{ id: nanoid(), num: 14 }, { id: nanoid(), num: 15 }, { id: nanoid(), num: 16 }];

var J = [{ id: nanoid(), num: 1 }, { id: nanoid(), num: 2 }, { id: nanoid(), num: 3 }, { id: nanoid(), num: 4 }, { id: nanoid(), num: 5 },
{ id: nanoid(), num: 6 }, { id: nanoid(), num: 7 }, { id: nanoid(), num: 8 }];
var j = [{ id: nanoid(), num: 9 }, { id: nanoid(), num: 10 }, { id: nanoid(), num: 11 }, { id: nanoid(), num: 12 }, { id: nanoid(), num: 13 },
{ id: nanoid(), num: 14 }, { id: nanoid(), num: 15 }, { id: nanoid(), num: 16 }];
var K = [{ id: nanoid(), num: 1 }, { id: nanoid(), num: 2 }, { id: nanoid(), num: 3 }, { id: nanoid(), num: 4 }, { id: nanoid(), num: 5 },
{ id: nanoid(), num: 6 }, { id: nanoid(), num: 7 }, { id: nanoid(), num: 8 }];
var k = [{ id: nanoid(), num: 9 }, { id: nanoid(), num: 10 }, { id: nanoid(), num: 11 }, { id: nanoid(), num: 12 }, { id: nanoid(), num: 13 },
{ id: nanoid(), num: 14 }, { id: nanoid(), num: 15 }, { id: nanoid(), num: 16 }];

var L = [{ id: nanoid(), num: 1 }, { id: nanoid(), num: 2 }, { id: nanoid(), num: 3 }, { id: nanoid(), num: 4 }, { id: nanoid(), num: 5 },
{ id: nanoid(), num: 6 }, { id: nanoid(), num: 7 }, { id: nanoid(), num: 8 }];
var l = [{ id: nanoid(), num: 9 }, { id: nanoid(), num: 10 }, { id: nanoid(), num: 11 }, { id: nanoid(), num: 12 }, { id: nanoid(), num: 13 },
{ id: nanoid(), num: 14 }, { id: nanoid(), num: 15 }, { id: nanoid(), num: 16 }];

var M = [{ id: nanoid(), num: 1 }, { id: nanoid(), num: 2 }, { id: nanoid(), num: 3 }, { id: nanoid(), num: 4 }, { id: nanoid(), num: 5 },
{ id: nanoid(), num: 6 }, { id: nanoid(), num: 7 }, { id: nanoid(), num: 8 }];
var m = [{ id: nanoid(), num: 9 }, { id: nanoid(), num: 10 }, { id: nanoid(), num: 11 }, { id: nanoid(), num: 12 }, { id: nanoid(), num: 13 },
{ id: nanoid(), num: 14 }, { id: nanoid(), num: 15 }, { id: nanoid(), num: 16 }];

var N = [{ id: nanoid(), num: 1 }, { id: nanoid(), num: 2 }, { id: nanoid(), num: 3 }, { id: nanoid(), num: 4 }, { id: nanoid(), num: 5 },
{ id: nanoid(), num: 6 }, { id: nanoid(), num: 7 }, { id: nanoid(), num: 8 }];
var n = [{ id: nanoid(), num: 9 }, { id: nanoid(), num: 10 }, { id: nanoid(), num: 11 }, { id: nanoid(), num: 12 }, { id: nanoid(), num: 13 },
{ id: nanoid(), num: 14 }, { id: nanoid(), num: 15 }, { id: nanoid(), num: 16 }];

var O = [{ id: nanoid(), num: 1 }, { id: nanoid(), num: 2 }, { id: nanoid(), num: 3 }, { id: nanoid(), num: 4 }, { id: nanoid(), num: 5 },
{ id: nanoid(), num: 6 }, { id: nanoid(), num: 7 }, { id: nanoid(), num: 8 }];
var o = [{ id: nanoid(), num: 9 }, { id: nanoid(), num: 10 }, { id: nanoid(), num: 11 }, { id: nanoid(), num: 12 }, { id: nanoid(), num: 13 },
{ id: nanoid(), num: 14 }, { id: nanoid(), num: 15 }, { id: nanoid(), num: 16 }];



 function Seating(){
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [ticketType, setTicketType] = useState("standard");
  const [quantity, setQuantity] = useState(1);
  const rows = [
    array, array1, A, a, B, b, C, c, D, d, E, e, F, f, G, g, H, h, I, i, J, j, K, k, L, l, M, m, N, n, O, o
  ];


  const calculateTotalPrice = () => {
    // Define pricing rules based on ticket type (you can modify this)
    const ticketPrices = {
      standard: 360, // Standard ticket price
      premium: 580, // Premium ticket price
    };

    // Calculate the subtotal (price per ticket * quantity)
    const subtotal = ticketPrices[ticketType] * quantity;

    // You can add additional logic for discounts, taxes, etc. here

    return subtotal;
  };

  const handleQuantityChange = (event) => {
    const selectedQuantity = parseInt(event.target.value, 10); // Parse the selected value to an integer
    setQuantity(selectedQuantity); // Update the quantity state
  };

  const handleProceedClick = () => {
    // Calculate the total price
    const totalPrice = calculateTotalPrice();
    // Here, you can proceed with the booking, e.g., sending data to the backend
    console.log("Selected Seats:", selectedSeats);
    console.log("Ticket Type:", ticketType);
    console.log("Quantity:", quantity);
    console.log("Total Price:", totalPrice);

    // You can add logic to redirect to a payment page or perform other actions
  };
  const selectSeatsByDefault = (el) => {
      const updatedSelectedSeats = [...selectedSeats];
    
      // Determine whether to select or deselect seats
      let selectSeats = true;
    
      // If the clicked seat is already selected, we are deselecting seats
      if (selectedSeats.includes(el.id)) {
        selectSeats = false;
      }
    
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
    
      // Iterate through the current row and the next row
      for (let i = 0; i < 2; i++) {
        const row = rows[rows.indexOf(clickedRow) + i];
    
        if (row) {
          // Find available seats in the row, starting from the clicked seat
          const availableSeatsInRow = row.slice(seatIndex).filter(
            (seat) => !selectedSeats.includes(seat.id)
          );
    
          // Select or deselect seats in this row
          if (selectSeats) {
            // Select as many available seats as possible in this row
            if (availableSeatsInRow.length > 0) {
              const seatsToSelectInRow = availableSeatsInRow.slice(0, quantity);
    
              // Update the updatedSelectedSeats array to include these seats
              updatedSelectedSeats.push(
                ...seatsToSelectInRow.map((seat) => seat.id)
              );
            }
          } else {
            // Deselect seats in this row
            const seatsToDeselectInRow = row.filter((seat) =>
              selectedSeats.includes(seat.id)
            );
    
            // Update the updatedSelectedSeats array to remove these seats
            updatedSelectedSeats.splice(
              updatedSelectedSeats.indexOf(seatsToDeselectInRow[0].id),
              quantity
            );
          }
    
          // If we have selected/deselected enough seats, break out of the loop
          if (updatedSelectedSeats.length >= quantity) {
            break;
          }
        }
      }
    
      // Update the selectedSeats state with the updatedSelectedSeats
      setSelectedSeats(updatedSelectedSeats);
    };
    

  const toggleColor = (el) => {
    const seatUnique = el.id;
    if (selectedSeats.includes(seatUnique)) {
      // Deselect the seat by removing it from the selectedSeats array
      setSelectedSeats(selectedSeats.filter((id) => id !== seatUnique));
    } else {
      // Select the seat by adding it to the selectedSeats array
      setSelectedSeats([...selectedSeats, seatUnique]);
    }
  };

  const handleClick = (el) => {
    // Call selectSeatsByDefault to select seats
    selectSeatsByDefault(el);

    // Call toggleColor for each selected seat after the loop
    selectedSeats.forEach((seatId) => {
      const seat = rows.flat().find((seat) => seat.id === seatId);
      toggleColor(seat);
    });
  };
  
  const options = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    timeZone: "Asia/Kolkata",
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",

  }

  const time = new Date().toLocaleTimeString("en-US", options);
  return (
    <div>
      <div className="timeDate">
        <p> {time}</p>
      </div>
      <br></br>
      <div className="options">
  <form>
    <div className="form-group" style={{ display: "inline-block", marginRight: "20px" }}>
      <label htmlFor="ticketType">Ticket Type</label>
      <select id="ticketType" name="ticketType">
        <option value="standard">Standard</option>
        <option value="premium">Premium</option>
      </select>
    </div>
    <div className="form-group" style={{ display: "inline-block" }}>
      <label htmlFor="quantity">
         <abbr title="Quantity">Qty</abbr>
      </label>
      <select id="quantity" name="quantity" onChange={handleQuantityChange}>
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
<div className="seatLayout" >
  <ul>
    <h4>Key to Seat Layout :</h4>
  <li>
  <div className="numberBox" ></div><span >Available seat</span>
  </li>
  <li>
  <div className="numberBox" ></div><span >Unavailable seat</span>
  </li>
  <li>
  <div className="numberBox" style={{background:'var(--custom-gradient-green)'}} ></div><span >Your selection</span>
  </li>
  </ul>
</div>
      <div className="reclinerMovie">
        <div className="recliner3D">3D RECLINER Rs.360.00</div>
        <div className="rRow">
          <div className="namingSeat">R</div>
          <div className="lRowBox">
            {array.map((el) => (
              <span
              key={el.id}
              className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
              onClick={() => handleClick(el)}
            >
              {el.num}
            </span>
            ))}
          </div>
          <div className="rRowBox">
            {array1.map((el) => (
                            <span
                            key={el.id}
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
  onClick={() => handleClick(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
        </div>
      </div>

      <div className="reclinerMovie">
        <div className="recliner3D">3D PRIME Rs.220.00</div>

        <div className="rRow">
          <div className="namingSeat">P</div>
          <div className="pRowBox">
            {A.map((el) => (
                            <span
                            key={el.id}
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
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
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
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
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {b.map((el) => (
                            <span
                            key={el.id}
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
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
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {c.map((el) => (
                            <span
                            key={el.id}
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
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
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {d.map((el) => (
                            <span
                            key={el.id}
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
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
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {e.map((el) => (
                            <span
                            key={el.id}
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
        </div>
      </div>

      <div className="reclinerMovie">
        <div className="recliner3D">3D CLASSIC Rs.200.00</div>

        <div className="rRow">
          <div className="namingSeat">J</div>
          <div className="pRowBox">
            {F.map((el) => (
                            <span
                            key={el.id}
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>

          <div className="pRRowBox">
            {f.map((el) => (
                            <span
                            key={el.id}
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
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
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {g.map((el) => (
                            <span
                            key={el.id}
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
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
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {h.map((el) => (
                            <span
                            key={el.id}
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
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
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {i.map((el) => (
                            <span
                            key={el.id}
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
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
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {j.map((el) => (
                            <span
                            key={el.id}
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
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
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {k.map((el) => (
                            <span
                            key={el.id}
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
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
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {l.map((el) => (
                            <span
                            key={el.id}
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
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
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {m.map((el) => (
                            <span
                            key={el.id}
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
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
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {n.map((el) => (
                            <span
                            key={el.id}
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() =>handleClick(el)}
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
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {o.map((el) => (
                            <span
                            key={el.num}
                            className={`numberBox ${selectedSeats.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => handleClick(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
        </div>
      </div>
</div>


      <div className="imageScreen"><img src={screenImg} alt="Screen img" />
        <p>All eyes this way please!</p>
      </div>
      <div className="center">
      <button onClick={handleProceedClick}>Proceed</button>
      </div>
      
    </div>
  );
};


export default Seating;