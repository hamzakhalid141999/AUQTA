import axios from "axios";
import { baseURL } from "../../constants";

async function unpauseUser(id) {
  try {
    const data = await axios.get(
      baseURL + "/api/admin/user/unpauseUser/" + id,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
}

export { unpauseUser };
