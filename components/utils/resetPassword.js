import React from "react";
import axios from "axios";
import { baseURL } from "../../constants";

async function resetPassword(code, newPassword, setLoading, success) {
  try {
    setLoading(true);
    const data = await axios.post(
      baseURL + "/api/user/resetPassword/" + code,
      {
        params: {
          newPassword: newPassword,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setLoading(false);
    success("Password has been reset");
    window.location.href("/");
    return data?.data;
  } catch (err) {
    setLoading(false);
    console.log(err);
  }
}

export { resetPassword };
