import "./Payment.css";
import React, { useState } from "react";

const Payment = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="desktop-1-payment">
      <div className="desktop-header-payment" />
      <b className="payment-cancellation-payment">
        PAYMENT & CANCELLATION ISSUE :- +91 7777777777
      </b>
      <b className="for-route-related-payment">
        FOR ROUTE RELATED INQUIRY :- +91 7777777777
      </b>
      <div className="desktop-headerbox-payment" />
      <b className="bus-tickets-payment">
        <a href="booking">BUS TICKETS</a>
      </b>
      <b className="track-bus-payment">
        <a href="/track">TRACK BUS</a>
      </b>
      <b className="agent-login-payment">
        <a href="/agent-login">AGENT LOGIN</a>
      </b>
      <b className="help-payment">
        <a href="/help">HELP</a>
      </b>

      <b className="account-payment">
        <button className="dropbtn-payment" onClick={toggleDropdown}>
          Account
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content-payment">
            <a href="payment">Payment</a>
            <a href="#">Cancellation</a>
            <a href="#">Modify</a>
            <a href="sign-in">Sign In</a>
            <a href="sign-up">Sign Up</a>
            <a href="#">My Profile</a>
          </div>
        )}
      </b>

      <img
        className="desktop-middelbox-payment"
        alt=""
        src="/rectangle-4.svg"
      />
      <div className="pay-onlinebox-payment" />
      {/* <div className="desktop-1-child1-payment" /> */}
      <b className="pay-online-payment">PAY ONLINE</b>
      <b className="phone-no-payment">Phone No.:</b>

      <b className="email-payment">Email:</b>
      <div className="desktop-1-phonebox-payment" />
      <input className="desktop-1-phonebox-payment" type="text" />
      <div className="desktop-1-emailbox-payment" />
      <input className="desktop-1-emailbox-payment" type="text" />
      <b className="pnr-payment">PNR:</b>
      <div className="desktop-1-pnrbox-payment" />
      <input className="desktop-1-pnrbox-payment" type="number" />
      <div className="desktop-1-child5-payment" />
      <input className="desktop-1-child5-payment" type="checkbox" />
      <b className="i-agree-to-payment">{`I Agree to all terms & conditions`}</b>

      <div className="rectangle-parent-payment">
        <div className="group-child-payment">
          <input
            className="group-child-payment"
            name="SUBMIT"
            value="SUBMIT"
            type="button"
          />
        </div>
        {/* <b className="search-booking">Search Booking</b> */}
      </div>
      {/* <div className="rectangle-footer-payment" /> */}
      {/* <b className="support">SUPPORT</b> */}
      {/* <b className="about-us-payment">ABOUT US</b> */}
      {/* <b className="contact-us">CONTACT US</b>
        <b className="feedback-and-suggestions">FEEDBACK AND SUGGESTIONS</b> */}
      <div className="desktop-1-paymentop">
        <select className="options">
          <option value="credit-card">Credit Card</option>
          <option value="debit-card">Debit Card</option>
          <option value="net-banking">Net Banking</option>
          <option value="none" selected disabled hidden>
            Option
          </option>
        </select>
      </div>

      <b className="payment-method-payment">PAYMENT METHOD:</b>
      <b className="how-payment-methods">
        <a href="/payment_work">How Payment Methods Works?</a>
      </b>
      <img className="polygon-icon" alt="" src="/polygon-1.svg" />
      <a href="/">
        <img
          className="bus-logo-1-icon-payment"
          alt=""
          src="/bus-logo-1@2x.png"
        />
      </a>

      <div class="footer-payment">
        <div className="about-us-payment" />
        <p className="footer-about-payment">
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

export default Payment;
