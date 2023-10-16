import React from "react";
import "./Payment_work.css";
function Payment_work() {
  return (
    <div className="outer-container">
      <h1 className="FAQ">Frequently Asked Questions</h1>
      <ul className="que-ans">
        <li>Q: How can I contact support?</li>
        <p>Ans: You can reach our support team at RideEasy@gmail.com.</p>

        <li>Q: Is my payment information secure?</li>
        <p>
          Ans: Yes, we use industry-standard security measures to protect your
          payment information.
        </p>

        <li>Q: What payment methods do you accept for bus bookings?</li>
        <p>
          Ans: We accept various payment methods, including credit cards, debit
          cards, online banking, and digital wallets like Apple Pay and Google
          Pay. You can choose the method that is most convenient for you during
          the booking process.
        </p>

        <li>
          Q: Can I pay for my bus ticket in cash at the bus station or upon
          boarding?
        </li>
        <p>
          Ans: Yes, we do accept cash payments at select bus stations and upon
          boarding. However, we recommend checking the specific payment options
          available for your route when making a reservation.
        </p>

        <li>Q: What if there's an issue with my transaction?</li>
        <p>
          Ans: We use secure and encrypted payment gateways to ensure the safety
          of your financial information during online transactions. Your payment
          details are protected.
        </p>
      </ul>

      <h1 className="works">How it works?</h1>

      <ol>
        <li>
          Enter your PNR as received in SMS after placing phone booking with us
        </li>
        <li>Enter your phone number as provided during phone booking</li>
        <li>Submit & Do online payment for your booking</li>
        <li>
          Upon successful payment, You will receive email with CONFIRMED PNR No.
          & Journey details.
        </li>
      </ol>
    </div>
  );
}

export default Payment_work;
