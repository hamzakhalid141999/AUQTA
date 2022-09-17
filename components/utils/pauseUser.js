import axios from "axios";
import { baseURL } from "../../constants";

async function pauseUser(id) {
  try {
    const data = await axios.get(baseURL + "/api/admin/user/pauseUser/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err);
  }
}

export { pauseUser };
