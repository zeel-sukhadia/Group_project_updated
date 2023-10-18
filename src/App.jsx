import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop1 from "./pages/Desktop1";
import Help from "./pages/Help";

import { useEffect } from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Payment from "./pages/Payment";
import Cancellation from "./pages/Cancellation";
import Payment_work from "./pages/Payment_work";
import Modify from "./pages/Modify";

import Dashboard from "./pages/Dashboard/Dashboard";

import Bus_ticket from "./pages/Bus_ticket";

// import Seat_select from "./pages/Seat_select";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route exact path="/" Component={Desktop1} />
      <Route path="/help" Component={Help} />
      <Route path="/sign-in" element={<SignIn />} index />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/payment_work" element={<Payment_work />} />
      <Route path="/cancellation" element={<Cancellation />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/modify" element={<Modify />} />
      <Route path="/bus-ticket" element={<Bus_ticket />} />

      {/* <Route path="/seat" element={<Seat_select />} /> */}
    </Routes>
  );
}
export default App;
