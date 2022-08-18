import axios from "axios";
import { baseURL } from "../../constants";

async function contactUs(
  name,
  email,
  phone,
  message,
  setLoading,
  success,
  error
) {
  try {
    const data = await axios.post(
      baseURL + "/api/misc/contactUs",
      {
        name: name,
        email: email,
        phone: phone,
        message: message,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setLoading(false);
    success("Message sent!");
    console.log(data?.data);
  } catch (err) {
    console.log(err);
  }
}

export { contactUs };
