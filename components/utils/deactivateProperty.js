import axios from "axios";
import { baseURL } from "../../constants";

async function deactivateProperty(id) {
  try {
    const data = await axios.get(baseURL + "/api/property/deactivate/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err);
  }
}

export { deactivateProperty };
