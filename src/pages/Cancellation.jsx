import "./Cancellation.css";
import React, { useState } from "react";
const Cancellation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="desktop-1-cancellation">
      {/* <div className="desktop-1-child-cancellation"> */}
      <div className="inquiry-number">
        <b className="for-route-cancellation">
          FOR ROUTE RELATED INQUIRY :- +91 7777777777
        </b>
        <b className="payment-cancellation">{`PAYMENT & CANCELLATION ISSUE :- +91 7777777777`}</b>
      </div>
      <div className="desktop-1-inner" />
      <a href="/">
        <img
          className="bus-logo-1-icon-cancellation"
          alt=""
          src="/bus-logo-1@2x.png"
        />
      </a>
      <b className="bus-tickets-cancellation">
        <a href="booking">BUS TICKETS</a>
      </b>
      <b className="track-bus-cancellation">
        <a href="/track">TRACK BUS</a>
      </b>
      {/* <b className="account-cancellation">ACCOUNT</b> */}
      <b className="account-cancellation">
        <button className="dropbtn-cancellation" onClick={toggleDropdown}>
          Account
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content-cancellation">
            <a href="payment">Payment</a>
            <a href="cancellation">Cancellation</a>
            <a href="#">Modify</a>
            <a href="sign-in">Sign In</a>
            <a href="sign-up">Sign Up</a>
            <a href="#">My Profile</a>
          </div>
        )}
      </b>
      <b className="agent-login-can">
        <a href="/agent-login">AGENT LOGIN</a>
      </b>
      <b className="help-cancellation">
        <a href="/help">HELP</a>
      </b>
      <img
        className="desktop-middelbox-cancellation"
        alt=""
        src="/rectangle-4.svg"
      />
      <img
        className="desktop-1-child1-cancellation"
        alt=""
        src="images-cancellation/rectangle-5.svg"
      />
      <b className="cancellation">CANCELLATION</b>
      <b className="cancellation-cut-off">Cancellation Cut off Time</b>
      <b className="cancellation-return-amount">Cancellation Return Amount</b>
      <img className="line-icon-cancellation" alt="" src="/line-1.svg" />
      <img className="desktop-1-child2-cancellation" alt="" src="/line-3.svg" />
      <div className="hours-to-24">6 Hours to 24 Hours</div>
      <div className="hours-to-48">24 Hours to 48 Hours</div>
      <div className="more-than-48">More than 48 hours</div>
      <div className="div">40%</div>
      <div className="div1">50%</div>
      <div className="div2">85%</div>
      <b className="journey-date-cancellation">
        JOURNEY DATE :<br></br>
        <input
          className="journey-date-picker-cencallation"
          name="journey-date-picker"
          type="date"
          placeholder=""
        ></input>
      </b>
      <b className="pnr-cencallation">
        PNR:<br></br>
        <input
          className="desktop-1-pnr-cancellation"
          name="desktop-1-pnr"
          type="text"
          placeholder=""
        ></input>
      </b>
      {/* <div className="desktop-1-child3" /> */}
      <b className="arrival">
        ARRIVAL :<br></br>
        <br></br>
        <input
          className="desktop-1-arrival"
          name="desktop-1-arrival"
          type="text"
          placeholder=""
        ></input>
      </b>
      {/* <div className="desktop-1-child4-cancellation" /> */}
      {/* <div className="desktop-1-child5" /> */}
      <b className="departure">
        DEPARTURE :<br></br>
        <input
          className="desktop-1-departur"
          name="desktop-1-departur"
          type="text"
          placeholder=""
        ></input>
      </b>
      {/* <div className="line-div" /> */}
      <div className="rectangle-parent-cancellation">
        <div className="group-child-cancellation-outer">
          <input
            className="group-child-cancellation"
            name="SUBMIT"
            value="SUBMIT"
            type="button"
          />
        </div>
        {/* <b className="search-booking">Search Booking</b> */}
      </div>
      <div className="desktop-1-agree-cancellation" />
      <input
        className="desktop-1-agree-cancellation"
        name="desktop-1-agree"
        type="checkbox"
        placeholder=""
      ></input>
      <b className="i-agree-to-cancellation">
        {" "}
        {`I Agree to all terms & conditions`}{" "}
      </b>{" "}
      <br></br>
      <div class="footer">
        <div className="about-us-cancellation" />
        <p className="footer-about-cancellation">
          <h1>ABOUT US</h1>
          RideEasy offering services of many seating And Sleepers buses for
          various regions around Gujarat and Main Sectors outside Gujarat such
          as Mumbai and Delhi. asy RideEasy offers bus ticket booking through
          its website for all major routes.
        </p>
      </div>
    </div>
  );
};

export default Cancellation;
