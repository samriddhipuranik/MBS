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
  const [selected, setSelected] = useState([]);

  const toggleColor = (el) => {
    // Check if the element is already selected
    if (selected.includes(el.id)) {
      // Deselect the element by removing it from the selected array
      setSelected(selected.filter((num) => num !== el.num));
    } else {
      // Select the element by adding it to the selected array
      setSelected([...selected])
      console.log(setSelected)
      // setSelected([...selected, el.num]);
    }
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
      <select id="quantity" name="quantity">
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
              key={el.num}
              className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
              onClick={() => toggleColor(el)}
            >
              {el.num}
            </span>
            ))}
          </div>
          <div className="rRowBox">
            {array1.map((el) => (
                            <span
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
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
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>

          <div className="pRRowBox">
            {a.map((el) => (
                            <span
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
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
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {b.map((el) => (
                            <span
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
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
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {c.map((el) => (
                            <span
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
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
                            className={`numberBox ${selected.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {d.map((el) => (
                            <span
                            key={el.id}
                            className={`numberBox ${selected.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
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
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {e.map((el) => (
                            <span
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
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
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>

          <div className="pRRowBox">
            {f.map((el) => (
                            <span
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
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
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {g.map((el) => (
                            <span
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
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
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {h.map((el) => (
                            <span
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
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
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {i.map((el) => (
                            <span
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
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
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {j.map((el) => (
                            <span
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
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
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {k.map((el) => (
                            <span
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
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
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {l.map((el) => (
                            <span
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
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
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {m.map((el) => (
                            <span
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
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
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {n.map((el) => (
                            <span
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
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
                            key={el.num}
                            className={`numberBox ${selected.includes(el.id) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
                          >
                            {el.num}
                          </span>
              
            ))}
          </div>
          <div className="pRRowBox">
            {o.map((el) => (
                            <span
                            key={el.num}
                            className={`numberBox ${selected.includes(el.num) ? 'selected' : ''}`}
                            onClick={() => toggleColor(el)}
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
      <button>Proceed</button>
      </div>
      
    </div>
  );
}

export default Seating;