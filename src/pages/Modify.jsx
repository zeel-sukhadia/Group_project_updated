import "./Modify.css";
import React, { useState } from "react";

const Modify = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="group-parent-modify">
      <div className="bts-modify-ticket-wrapper">
        <div className="bts-modify-ticket">
          <div className="bts-modify-ticket-child" />

          <a href="/">
            <img
              className="bts-modify-logo-modify"
              alt=""
              src="/bus-logo-1@2x.png"
            />
          </a>

          <div className="bts-modify-header-line" />
          <b className="for-route-related-modify">
            FOR ROUTE RELATED INQUIRY :- +91 7777777777
          </b>
          <b className="payment-cancellation-modify">{`PAYMENT & CANCELLATION ISSUE :- 7777777777`}</b>
          <b className="bus-tickets-modify">
            <a href="/booking">BUS TICKETS</a>
          </b>
          <b className="track-bus-modify">
            <a href="/track">TRACK BUS</a>
          </b>
          <b className="agent-login-modify">
            <a href="/agent-login">AGENT LOGIN</a>
          </b>
          <div className="help-modify">
            <b className="help1-modify">
              <a href="/help">HELP</a>
            </b>
          </div>
          <b className="account-modify">
            <button className="dropbtn-payment" onClick={toggleDropdown}>
              Account
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content-payment">
                <a href="payment">Payment</a>
                <a href="cancellation">Cancellation</a>
                <a href="modify">Modify</a>
                <a href="sign-in">Sign In</a>
                <a href="sign-up">Sign Up</a>
                <a href="#">My Profile</a>
              </div>
            )}
          </b>

          <div className="rectangle-footer-modify" />
          <b className="about-us-modify">ABOUT US</b>

          <b className="contact-us-modify">CONTACT US</b>
          <b className="feedback-and-suggestions-modify">
            FEEDBACK AND SUGGESTIONS
          </b>

          <div className="bts-modify-ticket-journey" />
          <div className="bts-modify-ticket-email" />
          <div className="bts-modify-ticket-mobile" />
          <div className="bts-modify-ticket-child4" />
          <br></br>
          <input
            className="bts-modify-ticket-child4"
            name="bts-modify-ticket-child4"
            type="text"
          ></input>
          <b className="modify-ticket">MODIFY TICKET</b>
          <b className="prn-modify">PNR:</b>
          <b className="journey-date-modify">JOURNEY DATE :</b>
          <input
            className="bts-modify-ticket-journey"
            name="journey-date"
            type="text"
          ></input>
          <b className="mobile-no-modify">MOBILE NO. :</b>
          <input
            className="bts-modify-ticket-mobile"
            name="bts-modify-ticket-mobile"
            type="text"
          ></input>

          <b className="e-mail-modify">
            E - MAIL: <br></br>
          </b>
          <input
            className="bts-modify-ticket-email"
            name="bts-modify-ticket-email"
            type="text"
          ></input>

          <div className="group-child-submitbox-modify">
            <input className="submit-modify" type="button" value="SUBMIT" />
          </div>
        </div>
        <b className="support-modify">SUPPORT</b>
        <div className="bts-modify-ticket-child5-modify" />
        <br></br>
        <input
          className="bts-modify-ticket-child5-modify"
          name="bts-modify-ticket-child5"
          type="text"
        ></input>
        <div className="ridefusion-10-removebg-previ-modify" />

        <div class="footer-modify">
          <div className="about-us-modify" />
          <p className="footer-about-modify">
            <h1>ABOUT US</h1>
            <br></br>
            RideEasy offering services of many seating And Sleepers buses for
            various regions around Gujarat and Main Sectors outside Gujarat such
            as Mumbai and Delhi. RideEasy offers bus ticket booking through its
            website for all major routes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modify;
