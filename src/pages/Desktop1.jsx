import "./Desktop1.css";
// import DatePicker from "react-datepicker";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";

const RadioButtons = {
  ONE_WAY: "One Way",
  ROUND_WAY: "Round Way",
};

function Desktop1() {
  const navigate = useNavigate();
  const [fromStation, setFromStation] = useState(null);
  const [toStation, setToStation] = useState(null);
  const [journeyDate, setJourneyDate] = useState("");

  const showCardsData = () => {
    navigate("/bus-ticket", {
      state: { from: fromStation, to: toStation },
    });
  };

  const city = [
    "Surat",
    "Vadodara",
    "Jamnagar",
    "Ahmedabad",
    "Rajkot",
    "Mumbai",
    "Delhi",
    "Kolkata",
    "Chennai",
    "Bangalore",
    "Hyderabad",
    "Pune",
    "Lucknow",
    "Jaipur",
    "Indore",
    "Bhopal",
    "Patna",
    "Varanasi",
    "Agra",
    "Goa",
    "Coimbatore",
    "Kochi",
    "Mysore",
    "Nagpur",
    "Nashik",
    "Ahmednagar",
    "Thane",
    "Noida",
    "Gurgaon",
    "Faisalabad",
    "Lahore",
    "Islamabad",
    "Karachi",
    "Quetta",
    "Multan",
    "Rawalpindi",
    "Peshawar",
    "Kabul",
    "Kandahar",
    "Herat",
    "Tehran",
    "Isfahan",
    "Shiraz",
    "Tabriz",
    "Yazd",
    "Kerman",
  ];

  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value); // Update selected option when the user makes a selection
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRadioButton, setSelectedRadioButton] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onSelectRadioButton = (e) => {
    setSelectedRadioButton(e.target.value);
  };

  return (
    <div className="desktop-1-home">
      <img
        className="istockphoto-1310733467-612x612-icon"
        alt=""
        src="/istockphoto1310733467612x612-1@2x.png"
      />
      <div className="desktop-1-child-home" />
      <a href="/">
        <img className="bus-logo-1-icon-home" alt="" src="/bus-logo-1@2x.png" />
      </a>
      <b className="bus-tickets1">
        <a href="/booking">BUS TICKETS</a>
      </b>
      <b className="track-bus1">
        <a href="/track">TRACK BUS</a>
      </b>
      <b className="agent-login1">
        <a href="/agent-login">AGENT LOGIN</a>
      </b>

      <b className="help-home">
        <a href="/help">HELP</a>
      </b>

      <b className="account1-home">
        <button className="dropbtn-home" onClick={toggleDropdown}>
          Account
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content-home">
            <a href="payment">Payment</a>
            <a href="cancellation">Cancellation</a>
            <a href="modify">Modify</a>
            <a href="sign-in">Sign In</a>
            <a href="sign-up">Sign Up</a>
            <a href="#">My Profile</a>
          </div>
        )}
      </b>

      <div className="desktop-1-item-home" />
      <div className="rectangle-parent-home">
        <div className="from-station">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={city}
            value={fromStation}
            onChange={(e, value) => setFromStation(value)}
            sx={{
              width: 300,
              fontSize: "50px",
              marginLeft: "30px",
              position: "absolute",
              marginRight: "0px",
            }}
            renderInput={(params) => (
              <TextField {...params} label="From Station" />
            )}
          />
        </div>
      </div>
      <div className="rectangle-group-home">
        <div className="to-station">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={city}
            value={toStation}
            onChange={(e, value) => setToStation(value)}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="To Station" />
            )}
          />
        </div>
      </div>
      <div className="vector-parent-home">
        {/* <div className="reservation" /> */}

        {/* <div className="rectangle-container"> */}
        <div className="today">
          <b className="date">
            <input
              className="date"
              name="date"
              type="date"
              value={journeyDate}
              onChange={(e) => setJourneyDate(e.target.value)}
            />
            <label className="label-home">Date of Journey:</label>
          </b>
        </div>
      </div>

      <div className="desktop-1-inner-home" />

      <div className="ellipse-parent-home">
        <input
          type="radio"
          value={RadioButtons.ONE_WAY}
          checked={selectedRadioButton === RadioButtons.ONE_WAY}
          onChange={onSelectRadioButton}
        />
        &nbsp; <label className="radio-label-home">One-way</label>
      </div>
      <div className="ellipse-group-home">
        <div className="round-trip-home">
          <input
            type="radio"
            value={RadioButtons.ROUND_WAY}
            checked={selectedRadioButton === RadioButtons.ROUND_WAY}
            onChange={onSelectRadioButton}
          />
          &nbsp; <label className="radio-label2-home">Round-trip</label>
        </div>
      </div>
      <div className="for-route-related-home">
        FOR ROUTE RELATED ENQUIRY :- +91 7777777777
      </div>
      <div className="payment-cancellation-home">{`PAYMENT & CANCELLATION ISSUE :- +91 7777777777`}</div>

      <div>
        <label htmlFor="dropdown">Select an option:</label>
        <select
          id="dropdown"
          onChange={handleOptionChange}
          value={selectedOption}
        >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        {selectedOption && <p>You selected: {selectedOption}</p>}
      </div>

      <img className="group-icon1-home" alt="" src="/group.svg" />
      <img className="vector-icon1-home" alt="" src="/vector1.svg" />
      <div className="frame2" />
      <div className="search-parent">
        <div className="search">
          <button
            className="btn-search-home"
            variant="contained"
            onClick={showCardsData}
          >
            SEARCH
            <img className="vector-icon2-search" alt="" src="/vector2.svg" />
          </button>
        </div>
      </div>
      <img className="vector-icon3" alt="" src="/vector3.svg" />
      <img className="vector-icon4-hp" alt="" src="/vector4.svg" />
      <img className="group-icon2" alt="" src="/group1.svg" />
      <img className="frame-icon-home" alt="" src="/frame.svg" />

      <div className="desktop-2">
        <div className="quick-links-parent-home">
          <b className="quick-links-home">QUICK LINKS</b>
          <div className="my-booking-pay-container">
            <p className="my-booking">My Booking</p>
            <p className="my-booking">Pay Online</p>
            <p className="my-booking">Feedback</p>
            <p className="my-booking">&nbsp;</p>
          </div>
        </div>
        <div className="support-parent-home">
          <b className="support-home">SUPPORT</b>
          <b className="home-track-bus-container">
            <p className="my-booking">{`Home `}</p>
            <p className="my-booking">Track Bus</p>
            <p className="my-booking">Agent Login</p>
          </b>
        </div>
        <div className="info-parent">
          <b className="info">INFO</b>
          <div className="faq-user-agreement-container">
            <p className="my-booking">FAQ</p>
            <p className="my-booking">User Agreement</p>
            <p className="my-booking">Privacy Policy</p>
            <p className="my-booking">Terms and Conditions</p>
          </div>
        </div>
        <div className="contact-us-parent-home">
          <b className="contact-us-home">CONTACT US</b>
          <img className="vector-icon5-home" alt="" src="/vector5.svg" />
          <b className="b">+91 7777777777</b>
          <b className="wwwrideeasycom">www.RideEasy.com</b>
          <b className="inforideeasycom">Info@RideEasy.com</b>
          <img className="vector-icon6" alt="" src="/vector6.svg" />
          <img className="vector-icon7" alt="" src="/vector7.svg" />
        </div>
        <div className="about-us-parent-home">
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
        <div className="rectangle-parent1">
          <div className="group-child3" />
          <img
            className="bus-logo-2-icon-home"
            alt=""
            src="/bus-logo-2@2x.png"
          />
        </div>
      </div>
      <div className="easy-steps-for">EASY STEPS FOR BOOKING</div>
      <div className="vector-group">
        <img className="vector-icon8-home" alt="" src="/vector8.svg" />
        <div className="group-child4" />
        <div className="select-your-bus-container">
          <p className="my-booking">{`Select Your `}</p>
          <p className="my-booking">Bus</p>
        </div>
        <img className="vector-icon9" alt="" src="/vector9.svg" />
      </div>
      <div className="vector-container">
        <img className="vector-icon10" alt="" src="/vector10.svg" />
        <div className="group-child5" />
        <div className="pick-your-bus-container">
          <p className="my-booking">Pick Your</p>
          <p className="my-booking">Bus</p>
        </div>
        <img className="group-icon3" alt="" src="/group2.svg" />
      </div>
      <div className="vector-parent1">
        <img className="vector-icon11" alt="" src="/vector11.svg" />
        <div className="group-child6" />
        <div className="make-payment">
          <p className="my-booking">{`Make `}</p>
          <p className="my-booking">Payment</p>
        </div>
        <img className="vector-icon12" alt="" src="/vector12.svg" />
      </div>
      <div className="vector-parent2">
        <img className="vector-icon13" alt="" src="/vector13.svg" />
        <div className="group-child7" />
        <div className="booking-confirmed">
          <p className="my-booking">{`Booking `}</p>
          <p className="my-booking">Confirmed</p>
        </div>
        <img className="vector-icon14" alt="" src="/vector14.svg" />
      </div>
      <div className="why-choose-us">WHY CHOOSE US?</div>
      <div className="customer-satisfaction">
        <p className="my-booking">{`CUSTOMER `}</p>
        <p className="my-booking">SATISFACTION</p>
      </div>
      <img className="desktop-1-child1" alt="" src="/group-15.svg" />
      <div className="ladies-seats">LADIES SEATS</div>
      <div className="data-privacy">DATA PRIVACY</div>
      <div className="secure-and-safe-container">
        <p className="my-booking">SECURE AND SAFE</p>
        <p className="my-booking">{` BOOKING `}</p>
      </div>
      <div className="emergency-services">EMERGENCY SERVICES</div>
      <div className="weather-based-recommendations">
        <p className="my-booking">{`WEATHER-BASED `}</p>
        <p className="my-booking">RECOMMENDATIONS</p>
      </div>
      <img className="desktop-1-child2" alt="" src="/group-16.svg" />
      <img className="desktop-1-child3-home" alt="" src="/group-17.svg" />
      <img className="desktop-1-child4" alt="" src="/group-19.svg" />
      <img className="desktop-1-child5" alt="" src="/group-23.svg" />
      <img className="desktop-1-child6" alt="" src="/group-22.svg" />
      <img className="vector-icon15" alt="" src="/vector15.svg" />
      <img className="vector-icon16" alt="" src="/vector16.svg" />
      <img className="feature-image-1" alt="" src="/feature-image-1@2x.png" />
      <div className="silent-features">SILENT FEATURES</div>
      <div className="we-offer-the">{`We offer the best amenities to make our passenger’s journey more pleasant  `}</div>
      <img className="vector-icon17" alt="" src="/vector17.svg" />
      <img className="group-icon4" alt="" src="/group3.svg" />
      <div className="emergency-helpline-number">EMERGENCY HELPLINE NUMBER</div>
      <div className="highly-experienced-and-container">
        <p className="my-booking">{`HIGHLY EXPERIENCED AND `}</p>
        <p className="my-booking">TRAINED CREW</p>
      </div>
      <div className="gps-monitoring-247">GPS MONITORING 24/7 FOR 365 DAYS</div>
      <img className="desktop-1-child7" alt="" src="/group-11.svg" />
      <div className="maintenance-under-high-container">
        <p className="my-booking">{`MAINTENANCE UNDER HIGH `}</p>
        <p className="my-booking">QUALITY STANDARDS</p>
      </div>
      <div className="sanitized-amenities-and">{`SANITIZED AMENITIES AND INTERIORS `}</div>
      <img className="vector-icon18" alt="" src="/vector18.svg" />
      <div className="notifications-and-alert">NOTIFICATIONS AND ALERT</div>
      <img
        className="amenities-image-1-icon"
        alt=""
        src="/amenities-image-1@2x.png"
      />
      <div className="amenities">AMENITIES</div>
      <div className="we-offer-the1">{`We offer the best amenities to make our passenger’s journey more pleasant  `}</div>
      <div className="comfortable-seats">COMFORTABLE SEATS</div>
      <img className="frame-icon1" alt="" src="/frame1.svg" />
      <img className="group-icon5" alt="" src="/group4.svg" />
      <img className="vector-icon19" alt="" src="/vector19.svg" />
      <img className="vector-icon20" alt="" src="/vector20.svg" />
      <img className="frame-icon2" alt="" src="/frame2.svg" />
      <div className="emergency-exit">EMERGENCY EXIT</div>
      <div className="free-pickup">FREE PICKUP</div>
      <div className="fire-extinguisher">FIRE-EXTINGUISHER</div>
      <div className="charging-point">CHARGING POINT</div>
      <div className="air-conditioning">AIR CONDITIONING</div>
    </div>
  );
}

export default Desktop1;
