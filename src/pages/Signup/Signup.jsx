import "./Signup.css";
import { useState, useEffect } from "react";
import React from "react";
import { database } from "../FirebaseConfig";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const initialValues = { firstName: "", email: "", password: "" };
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
    if (!values.firstName) {
      errors.firstName = "Username is required!";
    }
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
      const firstName = formValues.firstName;
      const email = formValues.email;
      const password = formValues.password;

      // const handleSubmit = (e) => {
      //   e.preventDefault();
      //   const firstName = e.target.firstName.value;
      //   const email = e.target.email.value;
      //   const password = e.target.password.value;

      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          fetch(
            "https://signupautho-default-rtdb.firebaseio.com/userDate.json",
            {
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify({
                userId: data.user.uid,
                firstName: firstName,
                email,
              }),
            }
          )
            .then((res) => res.json())
            .then((res) => {
              console.log(res);

              navigate("/");
            });
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            alert("User already in use. Please try logging in again");
          } else {
            console.error(error.message);
          }
        });
    }
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <div className="sign-up">
        <div className="sign-up-child" />
        <b className="signup">Signup</b>

        <form
          onSubmit={(e) => {
            // handleSubmit(e);
            handleSubmit1(e);
          }}
        >
          <b className="name">
            Name :<br></br>
            <input
              className="username"
              name="firstName"
              type="text"
              placeholder="Enter your username"
              value={formValues.firstName} //changes
              onChange={handleChange}
            />
            {formErrors.firstName && (
              <div
                className="error"
                style={{ color: "red", fontSize: "14px", marginTop: "5px" }}
              >
                {formErrors.firstName}
              </div>
            )}
          </b>
          <br></br>

          <b className="email">
            Email :<br></br>
            <input
              className="mail"
              name="email"
              placeholder="Enter your email"
              value={formValues.email} //chnages
              onChange={handleChange}
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

          <b className="password">
            Password :<br></br>
            <input
              placeholder="Enter password"
              className="passwrd"
              type="password"
              name="password"
              maxLength={8}
              value={formValues.password} //chnages
              onChange={handleChange}
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
                // onClick={() => navigate("/")}
              ></input>
            </b>
          </b>

          {database?.currentUser ? (
            <button onClick={() => signOut(database)}>Log out</button>
          ) : (
            <b className="already-have-an-container">
              <span>Already have an account?</span>
              <span onClick={() => navigate("/log-in")} className="login_nav">
                Login
              </span>
            </b>
          )}
        </form>
      </div>
    </div>
  );
}

export default SignUp;
