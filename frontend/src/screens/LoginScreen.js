import "./LoginScreen.css";
import { useState } from "react";
import { login } from "../redux/thunks/userThunk";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/registerAction";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [postcode, setPostcode] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const credentials = { email: emailLogin, password: passwordLogin };
    const loginAttempt = await dispatch(login(credentials));
    if (loginAttempt.payload === undefined) {
      alert("incorrect credentials");
    } else {
      return;
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      email: emailRegister,
      password: passwordRegister,
      firstName,
      lastName,
      addressLine1,
      addressLine2,
      postcode,
    };
    const registerAttempt = await register(credentials);
    if (registerAttempt.message === "Invalid Entries") {
      alert("Invalid Entries");
    } else if (registerAttempt.message === "User already exists") {
      alert("user Already exists");
    } else if (registerAttempt.message === "Success") {
      const credentialsFresh = {
        email: emailRegister,
        password: passwordRegister,
      };
      dispatch(login(credentialsFresh));
    } else {
      return;
    }
  };

  return (
    <div className="loginscreen">
      <h2 className="loginscreen_title">Already a member? Login</h2>
      <form className="loginscreen_form">
        <div className="loginscreen_form_row">
          <label>email </label>
          <input
            name="emaillogin"
            onChange={(e) => {
              setEmailLogin(e.target.value);
            }}
          />
        </div>
        <div className="loginscreen_form_row">
          <label>password </label>
          <input
            name="passwordlogin"
            required
            type="password"
            onChange={(e) => setPasswordLogin(e.target.value)}
          />{" "}
        </div>
        <button
          className="loginscreen_submitbutton"
          onClick={(e) => handleLoginSubmit(e)}
        >
          Login
        </button>
      </form>

      <h2 className="loginscreen_title">
        Not a member? Register below for future offers
      </h2>
      <form className="loginscreen_form">
        <div className="loginscreen_form_row">
          <label>
            email<sup>*</sup>{" "}
          </label>
          <input
            name="email"
            required
            onChange={(e) => {
              setEmailRegister(e.target.value);
            }}
          />
        </div>
        <div className="loginscreen_form_row">
          <label>
            password<sup>*</sup>{" "}
          </label>
          <input
            type="password"
            onChange={(e) => {
              setPasswordRegister(e.target.value);
            }}
            required
          />{" "}
        </div>
        <div className="loginscreen_form_row">
          <label>
            First Name<sup>*</sup>{" "}
          </label>
          <input
            required
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />{" "}
        </div>
        <div className="loginscreen_form_row">
          <label>
            Last Name<sup>*</sup>{" "}
          </label>
          <input
            required
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />{" "}
        </div>
        <div className="loginscreen_form_row">
          <label>
            Address Line 1<sup>*</sup>
          </label>
          <input
            required
            onChange={(e) => {
              setAddressLine1(e.target.value);
            }}
          />{" "}
        </div>
        <div className="loginscreen_form_row">
          <label>Address Line 2</label>
          <input
            onChange={(e) => {
              setAddressLine2(e.target.value);
            }}
          />{" "}
        </div>
        <div className="loginscreen_form_row">
          <label>
            Postcode<sup>*</sup>
          </label>
          <input
            required
            onChange={(e) => {
              setPostcode(e.target.value);
            }}
          />{" "}
        </div>
        <button
          className="loginscreen_submitbutton"
          onClick={(e) => handleRegisterSubmit(e)}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;
