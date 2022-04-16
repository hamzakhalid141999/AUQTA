import React, { useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import classes from "./loginSignupModal.module.css";

function LoginSignupModal({ open, onCloseModal }) {
  const [activeTab, setActiveTab] = useState("signin");

  const [signupPassword, setSignupPassword] = useState();
  const [isMinLength, setIsMinLength] = useState();
  const [isMix, setIsMix] = useState();
  const [isSpecialCharacter, setIsSpecialCharacter] = useState();
  const [isLowerUpper, setIsLowerUpper] = useState();

  const [signupEmail, setSignupEmail] = useState();
  const [currentState, setCurrentState] = useState(1); //1=Login, 2=Signup, 3=Forget Password
  const toggleAuthScreen = (value) => {
    setActiveTab(value);
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

  return (
    <Modal
      classNames={{
        overlay: classes.customOverlay,
        modal: classes.createShowModal,
      }}
      open={open}
      onClose={onCloseModal}
      center
    >
      <div className={classes.main_container}>
        <div className={classes.content_container}>
          <h1>
            {currentState === 1 || currentState === 2
              ? "Welcome to Auqta"
              : currentState === 3 && "Request to reset your Password"}
          </h1>
          {
            currentState !== 3 &&

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

          }
         

          {currentState === 1 ? (
            <>
              <div className={classes.inputField}>
                <label>Email</label>
                <input type="email" placeholder="Enter email" />
              </div>
              <div className={classes.inputField}>
                <label>Password</label>
                <input type="password" placeholder="Enter password" />
              </div>
              <div className={classes.btn}>
                <p>Sign in</p>
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
                <label>Email</label>
                <input type="email" placeholder="Enter email" />
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
                  <input type="checkbox" />
                  <p>I am a Landlord or industry professional</p>
                </div>
                <div className={classes.checkboxes_row}>
                  <input type="checkbox" />
                  <p>I am looking to invest or purchase</p>
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
              <div className={classes.inputField}>
                <label>Professional Type</label>
                <select>
                  <option>Real estate/broker</option>
                  <option>Invester</option>
                </select>
              </div>
              <div className={classes.single_row}>
                <div style={{ width: "45%" }} className={classes.inputField}>
                  <label>First name</label>
                  <input type="text" placeholder="First name" />
                </div>
                <div style={{ width: "45%" }} className={classes.inputField}>
                  <label>Last name</label>
                  <input type="text" placeholder="Last name" />
                </div>
              </div>

              <div className={classes.single_row}>
                <div style={{ width: "45%" }} className={classes.inputField}>
                  <label>City</label>
                  <input type="text" placeholder="City name" />
                </div>
                <div style={{ width: "45%" }} className={classes.inputField}>
                  <label>Phone</label>
                  <input type="text" placeholder="XXXXXXX" />
                </div>
              </div>

              <div className={classes.btn}>
                <p>Continue</p>
              </div>

              <p className={classes.forgot_password}>
                By submitting, I accept Auqta{"'"}s terms of use
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

                <div onClick={()=>{
                  handleStateChange(1)
                }} className={classes.btn}>
                <p>Reset</p>
              </div>
              </>
            )
          )}
        </div>
      </div>
    </Modal>
  );
}

export default LoginSignupModal;
