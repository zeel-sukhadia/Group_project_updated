import "./Help.css";
import React, { useState } from "react";

const Help = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);
  const [showDropdown5, setShowDropdown5] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdown2 = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleDropdown3 = () => {
    setShowDropdown2(!showDropdown2);
  };

  const toggleDropdown4 = () => {
    setShowDropdown3(!showDropdown3);
  };

  const toggleDropdown5 = () => {
    setShowDropdown4(!showDropdown4);
  };

  const toggleDropdown6 = () => {
    setShowDropdown5(!showDropdown5);
  };

  return (
    <div className="help">
      <div className="help-child-help" />
      <div className="group-parent-help">
        <div className="rectangle-parent-help">
          <div className="group-child-help" />
          <div className="group-item-help" />
          <div className="faq-select-container">
            <b>{`FAQ ( `}</b>
            <span className="select-a-topic">Select a Topic</span>
            <b> )</b>
          </div>
          <img className="group-inner-help" alt="" src="/line-1.svg" />
          <div className="line-div" />
          <img className="line-icon" alt="" src="/line-3.svg" />
          <div className="group-child1-help" />

          <div className="booking-issues">
            <span className="faq-tag" onClick={toggleDropdown2}>
              Booking Issue
            </span>
            <hr></hr>
            {showDropdown && (
              <div className="faq-dropdown">
                <p>This is the answer to the booking issue.</p>
              </div>
            )}
          </div>
          <div className="payment-issues">
            <span className="faq-tag" onClick={toggleDropdown3}>
              Payment Issues
            </span>
            {showDropdown2 && (
              <div className="faq-dropdown">
                <p>This is the answer to the Payment Issues.</p>
              </div>
            )}
          </div>
          <div className="service-issues">
            <span className="faq-tag" onClick={toggleDropdown4}>
              Service Issues
            </span>
            <hr></hr>
            {showDropdown3 && (
              <div className="faq-dropdown">
                <p>This is the answer to the Service Issues.</p>
              </div>
            )}
          </div>

          <div className="booking-help">
            <span className="faq-tag" onClick={toggleDropdown5}>
              Booking Help
            </span>
            {showDropdown4 && (
              <div className="faq-dropdown">
                <p>This is the answer to the Booking Help.</p>
              </div>
            )}
          </div>
          <div className="technical-issues">
            <span className="faq-tag" onClick={toggleDropdown6}>
              Technical Issues
            </span>
            {showDropdown5 && (
              <div className="faq-dropdown">
                <p>This is the answer to the Technical Issues.</p>
              </div>
            )}
          </div>

          <img className="vector-icon-help" alt="" src="/vector.svg" />
          <img className="frame-icon-help" alt="" src="/frame.svg" />
          <img className="vector-icon1-help" alt="" src="/vector1.svg" />
          <img className="vector-icon2-help" alt="" src="/vector2.svg" />
          {/* <img className="frame-icon1-help" alt="" src="/frame1.svg" /> */}

          <img className="vector-icon4-help" alt="" src="/vector4.svg" />
          {/* <img className="frame-icon2" alt="" src="/frame2.svg" /> */}
        </div>
        {/* <img className="frame-icon3" alt="" src="/frame3.svg" />
          <img className="frame-icon4" alt="" src="/frame4.svg" />
          <img className="frame-icon5" alt="" src="/frame5.svg" />
          <img className="frame-icon6" alt="" src="/frame6.svg" /> */}
      </div>
      <div className="customer-support-parent">
        <b className="customer-support">24/7 Customer Support</b>
        <img
          className="pngtreecustomer-service-staff"
          alt=""
          src="images-help/pngtreecustomer-service-staff-contact-us-5410602-1@2x.png"
        />
        <b className="rideeasy-help">RideEasy Help</b>
      </div>
      <div className="rectangle-group-help">
        <div className="rectangle-div-help" />
        <a href="/">
          <img
            className="bus-logo-1-icon-help"
            alt=""
            src="/bus-logo-1@2x.png"
          />
        </a>
      </div>
      <b className="bus-tickets-help">
        <a href="/booking">BUS TICKETS</a>
      </b>
      <b className="track-bus-help">
        <a href="/track">TRACK BUS</a>
      </b>
      <b className="agent-login-help">
        <a href="/agent-login">AGENT LOGIN</a>
      </b>
      <b className="help1">
        <a href="/help">HELP</a>
      </b>

      {/* <b className="account">ACCOUNT</b> */}
      <b className="account-help">
        <button className="dropbtn-help" onClick={toggleDropdown}>
          Account
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <a href="#">Login</a>
            <a href="#">Sign Up</a>
            <a href="#">My Profile</a>
          </div>
        )}
      </b>

      <img className="group-icon-help" alt="" src="/group.svg" />
      {/* <img className="vector-icon3-help" alt="" src="/vector3.svg" /> */}

      {/* <img className="vector-icon5-help" alt="" src="/vector5.svg" /> */}
      {/* track bus logo */}
      <img className="group-icon1-help" alt="" src="/group1.svg" />

      <img className="vector-icon8-help" alt="" src="/vector8.svg" />
      <img className="group-icon3-help" alt="" src="/group3.svg" />
      <img className="vector-icon9-help" alt="" src="/vector9.svg" />
      {/* <img className="vector-icon10-help" alt="" src="/vector10.svg" /> */}
      <div className="desktop-2-help">
        <div className="quick-links-parent-help">
          <b className="quick-links-help">QUICK LINKS</b>
          <div className="my-booking-pay-container-help">
            <p className="my-booking">My Booking</p>
            <p className="my-booking">Pay Online</p>
            <p className="my-booking">Feedback</p>
            <p className="my-booking">&nbsp;</p>
          </div>
        </div>
        <div className="support-parent">
          <b className="support">SUPPORT</b>
          <b className="home-track-bus-container">
            <p className="my-booking">{`Home `}</p>
            <p className="my-booking">Track Bus</p>
            <p className="my-booking">Agent Login</p>
          </b>
        </div>
        <div className="info-parent-help">
          <b className="info">INFO</b>
          <div className="faq-user-agreement-container">
            <p className="my-booking">FAQ</p>
            <p className="my-booking">User Agreement</p>
            <p className="my-booking">Privacy Policy</p>
            <p className="my-booking">Terms and Conditions</p>
          </div>
        </div>
        <div className="contact-us-parent-help">
          <b className="contact-us-help">CONTACT US</b>
          <img className="vector-icon11-help" alt="" src="/vector11.svg" />
          <img className="vector-icon5-help" alt="" src="/vector5.svg" />
          <b className="b">+91 7777777777</b>

          <img className="vector-icon6-help" alt="" src="/vector6.svg" />
          <b className="wwwrideeasycom-help">www.RideEasy.com</b>

          <img className="vector-icon7-help" alt="" src="/vector7.svg" />
          <b className="inforideeasycom-help">Info@RideEasy.com</b>
          {/* <img className="vector-icon12-help" alt="" src="/vector12.svg" />
          <img className="vector-icon13-help" alt="" src="/vector13.svg" /> */}
        </div>
        <div className="about-us-parent-help">
          <b className="about-us">ABOUT US</b>
          <div className="rideeasy-offering-services">
            RideEasy offering services of many seating And Sleepers buses for
            various regions around Gujarat and Main Sectors outiside gujarat
            such as Mumbai and Delhi.
          </div>
          <div className="rideeasy-offers-bus">
            RideEasy offers bus ticket booking through its website for all major
            routes.
          </div>
        </div>
        <div className="rectangle-container-help">
          <div className="group-child2" />
          <img
            className="bus-logo-2-icon-help"
            alt=""
            src="/bus-logo-2@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Help;
