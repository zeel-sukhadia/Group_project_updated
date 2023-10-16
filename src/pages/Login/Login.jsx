import React from "react";
import "../Login/Login.css";
import { database } from "../FirebaseConfig";

import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Login() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // const handleSubmit1 = (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(formValues));
  //   setIsSubmit(true);
  // };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // if (!values.firstName) {
    //   errors.firstName = "Username is required!";
    // }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  const navigate = useNavigate();
  const handleSubmit1 = (e) => {
    e.preventDefault();
    const formValidationErrors = validate(formValues);
    setFormErrors(formValidationErrors);
    setIsSubmit(true);

    if (Object.keys(formValidationErrors).length === 0) {
      const email = formValues.email;
      const password = formValues.password;

      // const navigate = useNavigate();
      // const handleSubmit = (e) => {
      //   e.preventDefault();
      //   const emailfeild = e.target.emailfeild.value;
      //   const password = e.target.password.value;

      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          fetch(
            "https://signupautho-default-rtdb.firebaseio.com/userDataRecords.json",
            {
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify({
                userId: data.user.uid,
                email,
              }),
            }
          )
            .then((res) => res.json())
            .then((res) => {
              console.log(res);

              navigate("/");
              // alert("successfully login");
            });
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            alert("User already in use. Please try logging in again");
          } else {
            console.error(error.message);
          }
        });
      //   .catch((error) => {
      //     console.error(error.message);
      //   }
      // });
    }
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Log in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}
      <div className="login_main">
        <div className="login-child" />
        <b className="signup">Login</b>

        <form onSubmit={(e) => handleSubmit1(e)}>
          <b className="email-login">
            Email :<br></br>
            <input
              className="mail"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={formValues.email}
            />
            {formErrors.email && (
              <div
                className="error"
                style={{ color: "red", fontSize: "14px", marginTop: "5px" }}
              >
                {formErrors.email}
              </div>
            )}
          </b>

          <b className="password-login">
            Password :<br></br>
            <input
              placeholder="Enter password"
              className="passwrd-login"
              type="password"
              name="password"
              maxLength={8}
              onChange={handleChange}
              value={formValues.password}
            />
            {formErrors.password && (
              <div
                className="error"
                style={{ color: "red", fontSize: "14px", marginTop: "5px" }}
              >
                {formErrors.password}
              </div>
            )}
            <br></br>
            <br></br>
            <b className="submit">
              <input
                type="submit"
                className="btn"
                value="SUBMIT"
                name="submit"
              ></input>
            </b>
          </b>

          {database?.currentUser ? (
            <button onClick={() => signOut(database)}>
              Log out from login
            </button>
          ) : (
            <b className="already-have-an-container-login">
              <span>New user? Create a new Account </span>
              <span onClick={() => navigate("/sign-up")} className="signup_nav">
                SignUp
              </span>
            </b>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
