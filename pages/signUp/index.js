import React, { useState, useEffect } from "react";
import classes from "./signUp.module.css";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [country, setCountry] = useState();
  const [CNIC, setCNIC] = useState();
  const [phone, setPhone] = useState();
  const [userType, setUserType] = useState();

  const handleSignup = async () => {

    const info = {
      "username": username,
      "email": email,
      "password": password,
      "firstName": firstName,
      "lastName": lastName,
      "country": country,
      "CNIC": CNIC,
      "phone": phone,
      "userType": userType,
    };

    // const json = JSON.stringify(info);

    try{
      const data = await axios.post("http://localhost:8080/api/auth/signup", info , {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(data);
    }
    catch(err){
      console.log(err);
    }
    
  }

  //   const URL = "http://localhost:8080/api/auth/signup";
  //   axios(URL, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "text/plain",
  //     },
  //     data: json,
  //   })
  //     .then((response) => console.log(response.data))
  //     .catch((error) => {
  //       throw error;
  //     });
  // };

  return (
    <div className={classes.main_container}>
      <div className={classes.signup_content_container}>
        <input
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          placeholder="Enter first name"
        />
        <input
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          placeholder="Enter last name"
        />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter email"
        />
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Enter username"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter password"
        />
        <input
          onChange={(e) => {
            setCNIC(e.target.value);
          }}
          placeholder="Enter CNIC"
        />
        <input
          onChange={(e) => {
            setUserType(e.target.value);
          }}
          placeholder="Enter User Type"
        />
        <input
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          placeholder="Enter Phone number"
        />
        <input
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          placeholder="Enter Country"
        />
        <div onClick={handleSignup} className={classes.signup_btn}>
          <p>SIGNUP</p>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
