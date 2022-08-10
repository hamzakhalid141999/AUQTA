import React from "react";
import axios from "axios";
import { baseURL } from "../../constants";

async function sendResetPasswordEmail(
  email,
  setForgotPasswordEmailLoading,
  successResetPassEmailSent
) {
  try {
    setForgotPasswordEmailLoading(true);
    const data = await axios.get(
      baseURL + "/api/user/sendForgotPasswordEmail/" + email,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setForgotPasswordEmailLoading(false);
    successResetPassEmailSent();
    return data?.data;
  } catch (err) {
    setForgotPasswordEmailLoading(false);
    console.log(err);
  }
}

export { sendResetPasswordEmail };
