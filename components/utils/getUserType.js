import axios from "axios";
import { baseURL } from "../../constants";

async function getUserType(userId) {
  try {
    const data = await axios.get(baseURL + "/api/user/getUserType/" + userId, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data?.data;
  } catch (err) {
    console.log(err);
  }
}

export { getUserType };
