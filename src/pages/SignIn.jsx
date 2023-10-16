import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
// import { Auth } from "./FirebaseConfig";
import { database } from "./FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const initialValues = { email: "", password: "" };
function SignIn() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(null);
  const [formTouched, setFormTouched] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormValues = { ...formValues, [name]: value };
    const formValidationErrors = validate(formValues);
    setFormErrors(formValidationErrors);
    setFormValues(newFormValues);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = false;
    } else if (!regex.test(values.email)) {
      errors.email = true;
    }
    if (!values.password) {
      errors.password = false;
    } else if (values.password.length < 4 || values.password.length > 10) {
      errors.password = true;
    }
    return errors;
  };

  const handleSubmit = () => {
    signInWithEmailAndPassword(database, formValues.email, formValues.password)
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
              email: formValues.email,
            }),
          }
        )
          .then((res) => res.json())
          .then(() => {
            // navigate("/");
            // toast("successfully login", { type: "success", autoClose: 3000 });
            toast("Successfully SignIn", { type: "success", autoClose: 3000 });
            setTimeout(() => {
              navigate("/");
            }, 4000);
          });
      })
      .catch((error) => {
        navigate("/sign-up");
        if (error.code === "auth/email-already-in-use") {
          toast("User already in use. Please try logging in again", {
            type: "error",
            autoClose: 3000,
          });
        } else {
          toast(error.message, {
            type: "error",
            autoClose: 3000,
          });
          console.error(error.message);
        }
      });
  };

  return (
    <Container
      sx={{
        display: "flex",
        flex: 1,
        height: "1100px",
        width: "2300px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#563d85",
      }}
      maxWidth={"100%"}
    >
      <Box
        sx={{
          display: "flex",
          width: "90%",
          maxWidth: "calc(100vh - 90px)",
          height: "70%",
          maxHeight: "calc(100vh - 90px)",
          backgroundColor: "#fff",
          padding: "30px 40px",
          borderRadius: "10px",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4">Bus Tracking System</Typography>
        <TextField
          sx={{ marginTop: 5 }}
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          value={formValues.email}
          onChange={handleChange}
          error={formTouched?.email ? formErrors?.email : false}
          onBlur={() => setFormTouched((prev) => ({ ...prev, email: true }))}
        />
        <br></br>

        <FormControl variant="outlined" sx={{ marginTop: 2 }}>
          <InputLabel
            error={formTouched?.password ? formErrors?.password : false}
            htmlFor="outlined-adornment-password"
          >
            Password
          </InputLabel>
          <OutlinedInput
            id="password"
            name="password"
            label="Password"
            value={formValues.password}
            onChange={handleChange}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            error={formTouched?.password ? formErrors?.password : false}
            onBlur={() =>
              setFormTouched((prev) => ({ ...prev, password: true }))
            }
          />
          <br></br>
        </FormControl>

        <Button
          sx={{
            width: "20%",
            minWidth: "max-conent",
            marginTop: 4,
          }}
          disabled={
            formValues.email.length === 0 ||
            formValues.password.length === 0 ||
            JSON.stringify(formErrors).length !== 2
          }
          onClick={handleSubmit}
          variant="contained"
        >
          Login
        </Button>
        <Typography marginTop={2} fontSize={30}>
          {"New User? Create a new Account "}
          {
            <Link
              onClick={() => navigate("/sign-up")}
              underline="none"
              sx={{
                ":hover": {
                  cursor: "pointer",
                },
              }}
            >
              {"SignUp"}
            </Link>
          }
        </Typography>
      </Box>
      <ToastContainer />
    </Container>
  );
}

export default SignIn;
