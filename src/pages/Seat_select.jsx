import React, { useState } from "react";
import "./Seat_select.css";

const busTypePrices = {
  AC: 600,
  VOLVO: 800,
  "Non-AC": 200,
  "Semi-Sleeper": 300,
  Luxury: 700,
};

const totalSeats = 56; // Total number of seats on the bus
const seatsPerRow = 8; // Number of seats in each row

const Seat_select = ({ busType }) => {
  // State to manage selected and reserved seats
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [reservedSeats, setReservedSeats] = useState(new Set());

  // Function to handle seat selection
  const handleSeatClick = (seatNumber) => {
    if (reservedSeats.has(seatNumber)) {
      alert("This seat is already reserved.");
    } else if (selectedSeats.includes(seatNumber)) {
      // Deselect the seat if it's already selected
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      // Select the seat
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  // Function to handle payment and reservation
  const handlePayment = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }
    const seatPrice = busTypePrices[busType];

    // Calculate the total price
    const totalPrice = selectedSeats.length * seatPrice;
    setReservedSeats(new Set([...reservedSeats, ...selectedSeats]));
    setSelectedSeats([]);
    alert(`Reserved Seats: ${selectedSeats} \n Amount: ₹${totalPrice}`);
  };

  // Function to determine if a seat is reserved
  const isReserved = (seatNumber) => {
    return reservedSeats.has(seatNumber);
  };

  return (
    <div className="seat-booking-interface">
      <div className="inner-seatcomponent">
        <button className="cancel_btn">Cancel</button>
        <h2>Bus Seat Booking</h2>
        <div className="grey-box">Unavailable</div>
        <div className="white-box">Available</div>

        <div className="seats-interface">
          {Array.from({ length: totalSeats }, (_, index) => {
            const seatNumber = (index + 1).toString();
            const isSeatSelected = selectedSeats.includes(seatNumber);
            const isSeatReserved = isReserved(seatNumber);

            const seatClass = `seat ${isSeatSelected ? "selected" : ""} ${
              isSeatReserved ? "reserved" : ""
            }`;

            let marginLeft = "0";
            if (index % seatsPerRow === 4) {
              marginLeft = "40px"; // Increase space between seats
            }

            const seatStyle = {
              marginLeft,
            };

            return (
              <div
                key={seatNumber}
                className={seatClass}
                style={seatStyle}
                onClick={() => handleSeatClick(seatNumber)}
              >
                {seatNumber}
              </div>
            );
          })}
        </div>
        <button onClick={handlePayment} className="reserve-button">
          BOOK NOW
        </button>

        <a href="payment">
          <button className="payment_btn">proceed to payment</button>
        </a>
      </div>
    </div>
  );
};

export default Seat_select;
