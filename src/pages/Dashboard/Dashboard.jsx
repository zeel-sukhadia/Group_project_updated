import React from "react";
import { database } from "../FirebaseConfig";

import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const getUsers = () => {
    fetch(
      "https://signupautho-default-rtdb.firebaseio.com/userDate.json?userId=3jmWNGTRwhfXbjwB6Cx8ny4cmdY2",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => console.log(err));
  };

  return (
    <div>
      <button onClick={getUsers}>Get Users List</button>

      {database?.currentUser ? (
        <button onClick={() => signOut(database).then(() => navigate("/"))}>
          Logout from dashboard
        </button>
      ) : null}
    </div>
  );
};

export default Dashboard;
