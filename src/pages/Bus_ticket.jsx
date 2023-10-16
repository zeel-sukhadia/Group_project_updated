import React, { useState } from "react";
import "./Bus_ticket.css";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";

const availableBuses = [
  {
    type: "VOLVO",
    from: "Surat",
    to: "Vadodara",
    agency: "ABC Buses",
    departureTime: "08:00 AM",
    arrivalTime: "10:30 AM",
    availableSeats: 10,
  },
  {
    type: "Non-AC",
    from: "Surat",
    to: "Vadodara",
    agency: "Amulya agency",
    departureTime: "New Departure Time",
    arrivalTime: "New Arrival Time",
    availableSeats: 9,
  },
  {
    type: "AC",
    from: "Surat",
    to: "Vadodara",
    agency: "Radhe agency",
    departureTime: "New Departure Time",
    arrivalTime: "New Arrival Time",
    availableSeats: 5,
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
];

const Bus_ticket = () => {
  const { state } = useLocation();
  const fromStation = state?.from || null;
  const toStation = state?.to || null;

  const filteredBuses = availableBuses.filter(
    (bus) => bus.from === fromStation && bus.to === toStation
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="desktop-1-ticket">
      <div className="inquiry-number">
        <b className="for-route-ticket">
          FOR ROUTE RELATED INQUIRY: +91 7777777777
        </b>
        <b className="payment-ticket">
          PAYMENT & CANCELLATION ISSUE: +91 7777777777
        </b>
      </div>
      <div className="desktop-1-inner-ticket" />
      <a href="/">
        {/* Make sure to provide valid URLs */}
        <img
          className="bus-logo-1-icon-ticket"
          alt="Bus Logo"
          src="/bus-logo-1@2x.png"
        />
      </a>
      <b className="bus-tickets-ticket">
        <a href="booking">BUS TICKETS</a> {/* Provide valid URLs */}
      </b>
      <b className="track-bus-ticket">
        <a href="/track">TRACK BUS</a> {/* Provide valid URLs */}
      </b>
      <b className="account-ticket">
        <button className="dropbtn-ticket" onClick={toggleDropdown}>
          Account
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content-ticket">
            <a href="payment">Payment</a> {/* Provide valid URLs */}
            <a href="cancellation">Cancellation</a> {/* Provide valid URLs */}
            <a href="#">Modify</a>
            <a href="sign-in">Sign In</a> {/* Provide valid URLs */}
            <a href="sign-up">Sign Up</a> {/* Provide valid URLs */}
            <a href="#">My Profile</a>
          </div>
        )}
      </b>
      <b className="agent-login-ticket">
        <a href="/agent-login">AGENT LOGIN</a> {/* Provide valid URLs */}
      </b>
      <b className="help-ticket">
        <a href="/help">HELP</a> {/* Provide valid URLs */}
      </b>

      <div className="main-card">
        {filteredBuses.length > 0 ? (
          <div>
            <h3>Available Buses</h3>
            <div className="bus-cards">
              {filteredBuses.map((bus, index) => (
                <div className="bus-card" key={index}>
                  <table className="bus-table">
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Agency</th>
                        <th>Departure Time</th>
                        <th>Arrival Time</th>
                        {/* <th>Date</th> */}
                        <th>Available Seats</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr key={index}>
                        <td>{bus.type}</td>
                        <td>{bus.from}</td>
                        <td>{bus.to}</td>
                        <td>{bus.agency}</td>
                        <td>{bus.departureTime}</td>
                        <td>{bus.arrivalTime}</td>
                        {/* <td>{bus.date}</td> */}
                        <td>{bus.availableSeats}</td>
                        <td>
                          <Button
                            variant="contained"
                            onClick={() => viewSeats(bus)}
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
            {/* 
            <div className="bus-cards">
              {filteredBuses.map((bus, index) => (
                <div className="bus-card" key={index}>
                  <table className="bus-table">
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Agency</th>
                        <th>Departure Time</th>
                        <th>Arrival Time</th>
                        <th>Available Seats</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredBuses.map((bus, index) => (
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
                              onClick={() => viewSeats(bus)}
                            >
                              View Seats
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>

            <div className="bus-cards">
              {filteredBuses.map((bus, index) => (
                <div className="bus-card" key={index}>
                  <table className="bus-table">
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Agency</th>
                        <th>Departure Time</th>
                        <th>Arrival Time</th>
                        <th>Available Seats</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredBuses.map((bus, index) => (
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
                              onClick={() => viewSeats(bus)}
                            >
                              View Seats
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div> */}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Bus_ticket;
