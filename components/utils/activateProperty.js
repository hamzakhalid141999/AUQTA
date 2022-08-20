import axios from "axios";
import { baseURL } from "../../constants";

async function activateProperty(id) {
  try {
    const data = await axios.get(baseURL + "/api/property/activate/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err);
  }
}

export { activateProperty };
