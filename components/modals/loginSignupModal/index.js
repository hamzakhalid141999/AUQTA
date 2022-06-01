import React, { useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import classes from "./loginSignupModal.module.css";
import { baseURL } from "../../../constants";
import axios from "axios";
import { useAuth } from "../../../contextAPI";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginSignupModal({ setOpen, open, onCloseModal }) {
  const [activeTab, setActiveTab] = useState("signin");
  const [loggedInUser, setLoggedInUser] = useState();
  const [signupPassword, setSignupPassword] = useState();
  const [isMinLength, setIsMinLength] = useState();
  const [isMix, setIsMix] = useState();
  const [isSpecialCharacter, setIsSpecialCharacter] = useState();
  const [isLowerUpper, setIsLowerUpper] = useState();
  const [isUserAgent, setIsUserAgent] = useState();
  const [signupEmail, setSignupEmail] = useState();
  const [signupUsername, setSignupUsername] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [signInEmail, setSignInEmail] = useState();
  const [signInPassword, setSignInPassword] = useState();
  const [city, setCity] = useState();
  const [phone, setPhone] = useState();
  const { user, signUp } = useAuth();
  const [loading, setLoading] = useState(false);
  const [currentState, setCurrentState] = useState(1); //1=Login, 2=Signup, 3=Forget Password
  const toggleAuthScreen = (value) => {
    setActiveTab(value);
  };

  const success = () =>
    toast.success("Signed in successfully!", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    });

  const successSignup = () =>
    toast.success("User Registered!", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    });

  const error = (message) =>
    toast.error(message, {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    });

  const signIn = async () => {
    try {
      setLoading(true);
      const data = await axios.post(
        baseURL + "/api/auth/signinbyemail",
        {
          email: signInEmail,
          password: signInPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      signUp(data?.data);
      setLoggedInUser(data?.data);
      success();
      setLoading(false);
      setOpen(false);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data?.message);
        if (err.response.data?.message === "Invalid Password!") {
          error("Invaid Password");
        } else if (err.response.data?.message === "User not found") {
          error("User not found");
        }
      }
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loggedInUser) {
      signUp(loggedInUser);
    }
  }, [loggedInUser]);

  const onPressSignUp = async () => {
    if (!firstName) {
      error("Enter First Name");
      return;
    } else if (!lastName) {
      error("Enter Last Name");
      return;
    } else if (!phone) {
      error("Enter Phone Number");
      return;
    } else if (!city) {
      error("Enter City");
      return;
    }

    try {
      setLoading(true);
      const data = await axios.post(
        baseURL + "/api/auth/signup",
        {
          email: signupEmail,
          password: signupPassword,
          firstName: firstName,
          lastName: lastName,
          userType: "admin",
          username: signupUsername,
          city: city,
          phoneNo: phone,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      successSignup();
      setLoading(false);
      setCurrentState(1);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        if (err.response.data.message === "Email is already in use") {
          error("Email already registered");
        } else if (err.response.data.message === "Username is already taken") {
          error("Username unavailable");
        }
      }
      console.log(err);
      setLoading(false);
    }
  };

  function validateCode(string) {
    for (var i = 0; i < string.length; i++) {
      var char1 = string.charAt(i);
      var cc = char1.charCodeAt(0);

      if (
        cc > 47 &&
        cc < 58 &&
        ((cc > 64 && cc < 91) || (cc > 96 && cc < 123))
      ) {
      } else {
        return false;
      }
    }
    return true;
  }

  function validateSpecialCharacter(string) {
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return format.test(string);
  }

  const handlePassword = (value) => {
    if (value.length < 8) {
      setIsMinLength(false);
    } else {
      setIsMinLength(true);
    }
    if (!validateCode(value)) {
      setIsMix(false);
    } else {
      setIsMix(true);
    }
    if (!validateSpecialCharacter(value)) {
      setIsSpecialCharacter(false);
    } else {
      setIsSpecialCharacter(true);
    }
    setSignupPassword(value);
  };

  const handleStateChange = (state) => {
    setCurrentState(state);
  };

  const handleIsUserAgent = (value) => {
    setIsUserAgent(value);
  };

  return (
    <>
      <Modal
        classNames={{
          overlay: classes.customOverlay,
          modal: classes.createShowModal,
        }}
        open={open}
        onClose={onCloseModal}
        center
      >
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className={classes.main_container}>
          <div className={classes.content_container}>
            <h1>
              {currentState === 1 || currentState === 2
                ? "Welcome to Auqta"
                : currentState === 3 && "Request to reset your Password"}
            </h1>
            {currentState !== 3 && (
              <div className={classes.toggle_btn_container}>
                <div
                  onClick={() => {
                    toggleAuthScreen("signin");
                    handleStateChange(1);
                  }}
                  className={classes.signin_btn}
                >
                  <p>Sign in</p>

                  <div
                    style={{ opacity: activeTab === "signin" ? 1 : 0 }}
                    className={classes.active_tab}
                  />
                </div>
                <div
                  onClick={() => {
                    toggleAuthScreen("signup");
                    handleStateChange(2);
                  }}
                  className={classes.signup_btn}
                >
                  <p>New account</p>
                  <div
                    style={{ opacity: activeTab === "signup" ? 1 : 0 }}
                    className={classes.active_tab}
                  />
                </div>
              </div>
            )}

            {currentState === 1 ? (
              <>
                <div className={classes.inputField}>
                  <label>Email</label>
                  <input
                    onChange={(e) => {
                      setSignInEmail(e.target.value);
                    }}
                    type="email"
                    placeholder="Enter email"
                  />
                </div>
                <div className={classes.inputField}>
                  <label>Password</label>
                  <input
                    onChange={(e) => {
                      setSignInPassword(e.target.value);
                    }}
                    type="password"
                    placeholder="Enter password"
                  />
                </div>
                <div onClick={signIn} className={classes.btn}>
                  <p>Sign in</p>
                  {loading && <ClipLoader size={"20px"} color="white" />}
                </div>
                <p
                  onClick={() => {
                    handleStateChange(3);
                  }}
                  className={classes.forgot_password}
                >
                  Forgot your password?
                </p>
                <div className={classes.divider} />
                <p className={classes.connect_with}>Or connect with:</p>
                <div className={classes.apple_btn}>
                  <p>Continue with Apple</p>
                </div>
                <div className={classes.facebook_btn}>
                  <p>Continue with Facebook</p>
                </div>
                <div className={classes.google_btn}>
                  <p>Continue with Google</p>
                </div>
              </>
            ) : currentState === 2 ? (
              <>
                <div className={classes.inputField}>
                  <label>Username</label>
                  <input
                    onChange={(e) => {
                      setSignupUsername(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter username"
                  />
                </div>
                <div className={classes.inputField}>
                  <label>Email</label>
                  <input
                    onChange={(e) => {
                      setSignupEmail(e.target.value);
                    }}
                    type="email"
                    placeholder="Enter email"
                  />
                </div>
                <div
                  onChange={(e) => {
                    handlePassword(e.target.value);
                  }}
                  className={classes.inputField}
                >
                  <label>Password</label>
                  <input type="password" placeholder="Enter password" />
                </div>

                <div className={classes.password_constraints}>
                  <p className={isMinLength ? classes.no_error : classes.error}>
                    At least 8 characters
                  </p>
                  <p className={isMix ? classes.no_error : classes.error}>
                    Mix of letters and numbers
                  </p>
                  <p
                    className={
                      isSpecialCharacter ? classes.no_error : classes.error
                    }
                  >
                    At least 1 special character
                  </p>
                  <p className={classes.no_error}>
                    At least 1 upper case and 1 lower case
                  </p>
                </div>

                <div className={classes.checkboxes_container}>
                  <div className={classes.checkboxes_row}>
                    <input
                      onChange={(e) => {
                        handleIsUserAgent(e.target.checked);
                      }}
                      type="checkbox"
                    />
                    <p>I am a Real Estate Agent or Industrial Professional</p>
                  </div>
                  <div className={classes.checkboxes_row}>
                    <input type="checkbox" />
                    <p>I am looking to Invest or Purchase a property</p>
                  </div>
                  <div className={classes.checkboxes_row}>
                    <input type="checkbox" />
                    <p>I am looking to sell a property</p>
                  </div>
                  <div className={classes.checkboxes_row}>
                    <input type="checkbox" />
                    <p>I am looking to rent out a property</p>
                  </div>
                </div>

                <div className={classes.professional_information_container}>
                  <h1>Professional Information</h1>
                </div>
                {isUserAgent && (
                  <div className={classes.inputField}>
                    <label>Professional Type</label>
                    <select>
                      <option>Real estate/broker</option>
                      <option>Invester</option>
                    </select>
                  </div>
                )}

                <div className={classes.single_row}>
                  <div style={{ width: "45%" }} className={classes.inputField}>
                    <label>First name</label>
                    <input
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      type="text"
                      placeholder="First name"
                    />
                  </div>
                  <div style={{ width: "45%" }} className={classes.inputField}>
                    <label>Last name</label>
                    <input
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      type="text"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div className={classes.single_row}>
                  <div style={{ width: "45%" }} className={classes.inputField}>
                    <label>City</label>
                    <input
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                      type="text"
                      placeholder="City name"
                    />
                  </div>
                  <div style={{ width: "45%" }} className={classes.inputField}>
                    <label>Phone</label>
                    <input
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      type="text"
                      placeholder="XXXXXXX"
                    />
                  </div>
                </div>

                <div onClick={onPressSignUp} className={classes.btn}>
                  <p>Continue</p>
                  {loading && <ClipLoader size={"20px"} color="white" />}
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <input type="checkbox" />
                  <p className={classes.forgot_password}>
                    I accept Auqta{"'"}s terms of use
                  </p>
                </div>

                <div className={classes.divider} />
                <p className={classes.connect_with}>Or connect with:</p>
                <div className={classes.apple_btn}>
                  <p>Continue with Apple</p>
                </div>
                <div className={classes.facebook_btn}>
                  <p>Continue with Facebook</p>
                </div>
                <div className={classes.google_btn}>
                  <p>Continue with Google</p>
                </div>
              </>
            ) : (
              currentState === 3 && (
                <>
                  <p className={classes.info}>
                    Provide your email address to receive an email to reset your
                    password
                  </p>
                  <div className={classes.inputField}>
                    <label>Email</label>
                    <input type="email" placeholder="Enter email" />
                  </div>

                  <div
                    onClick={() => {
                      handleStateChange(1);
                    }}
                    className={classes.btn}
                  >
                    <p>Reset</p>
                  </div>
                </>
              )
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default LoginSignupModal;
