import axios from "axios";
import { baseURL } from "../../constants";

async function getInboxByUserId(id) {
  try {
    const data = await axios.get(baseURL + "/api/inbox/getinbox/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data?.data;
  } catch (err) {
    console.log(err);
  }
}

export { getInboxByUserId };
