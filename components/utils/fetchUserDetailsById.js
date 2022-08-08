import axios from "axios";
import { baseURL } from "../../constants";

async function fetchUserDetailsById(id) {
  try {
    const data = await axios.get(baseURL + "/api/user/profilebyid/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data?.data;
  } catch (err) {
    console.log(err);
  }
}

export { fetchUserDetailsById };
