import axios from "axios";
import { baseURL } from "../../constants";

async function FacebookSignIn() {
  try {
    const data = await axios.get(baseURL + "/api/auth/facebook", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data?.data;
  } catch (err) {
    console.log(err);
  }
}

export { FacebookSignIn };
