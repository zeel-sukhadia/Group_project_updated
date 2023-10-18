import React, { useState } from "react";
import "./Bus_ticket.css";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import SeatSelect from "./Seat_select";

const availableBuses = [
  {
    type: "VOLVO",
    from: "Surat",
    to: "Vadodara",
    agency: "Sharsvati Buses",
    departureTime: "08:00 AM",
    arrivalTime: "10:30 AM",
    availableSeats: 10,
  },
  {
    type: "Non-AC",
    from: "Surat",
    to: "Vadodara",
    agency: "Amulya agency",
    departureTime: "10:00 PM",
    arrivalTime: "2:30 PM",
    availableSeats: 9,
  },
  {
    type: "AC",
    from: "Surat",
    to: "Vadodara",
    agency: "Radhe agency",
    departureTime: "6:00 PM",
    arrivalTime: "9:10 PM",
    availableSeats: 5,
  },
  {
    type: "Semi-Sleeper",
    from: "Surat",
    to: "Vadodara",
    agency: "Madhuram Travels",
    departureTime: "07:30 AM",
    arrivalTime: "10:00 AM",
    availableSeats: 15,
  },
  {
    type: "Luxury",
    from: "Surat",
    to: "Vadodara",
    agency: "Comfort Travels",
    departureTime: "12:30 PM",
    arrivalTime: "03:45 PM",
    availableSeats: 12,
  },
  {
    type: "AC",
    from: "Ahmedabad",
    to: "Jamnagar",
    agency: "Mahalaskhmi agency",
    departureTime: "New Departure Time",
    arrivalTime: "New Arrival Time",
    availableSeats: 5,
  },
  {
    type: "Non-AC AC",
    from: "Ahmedabad",
    to: "Jamnagar",
    agency: "Rameshar agency",
    departureTime: "New Departure Time",
    arrivalTime: "New Arrival Time",
    availableSeats: 5,
  },
];

const View_select = () => {
  const { state } = useLocation();
  const fromStation = state?.from || null;
  const toStation = state?.to || null;

  // Pass the same data (totalSeats, seatPrice, seatsPerRow) to SeatSelect as in Bus_ticket
  const totalSeats = 56; // Total number of seats on the bus
  const seatPrice = 500; // Price per seat
  const seatsPerRow = 8; // Number of seats in each row

  const filteredBuses = availableBuses.filter(
    (bus) => bus.from === fromStation && bus.to === toStation
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showSeatSelect, setShowSeatSelect] = useState(false); // State to control seat selection visibility

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSeatSelect = () => {
    setShowSeatSelect(!showSeatSelect);
  };

  return (
    <div className="desktop-1-ticket">
      {/* ... (previous code) */}
      <div className="main-card">
        {filteredBuses.length > 0 ? (
          <div>
            <h3>Available Buses</h3>
            <div className="bus-cards">
              {filteredBuses.map((bus, index) => (
                <div className="bus-card" key={index}>
                  <table className="bus-table">
                    <thead>{/* ... (table headers) */}</thead>
                    <tbody>
                      <tr key={index}>
                        <td>{bus.type}</td>
                        <td>{bus.from}</td>
                        <td>{bus.to}</td>
                        <td>{bus.agency}</td>
                        <td>{bus.departureTime}</td>
                        <td>{bus.arrivalTime}</td>
                        <td>{bus.availableSeats}</td>
                        <td>
                          <Button
                            variant="contained"
                            className="view_seat"
                            onClick={toggleSeatSelect} // Toggle seat selection visibility
                          >
                            View Seats
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {showSeatSelect && (
        <SeatSelect
          totalSeats={totalSeats}
          seatPrice={seatPrice}
          seatsPerRow={seatsPerRow}
          onClose={toggleSeatSelect} // Pass a function to close the seat selection component
        />
      )}
    </div>
  );
};

export default View_select;
