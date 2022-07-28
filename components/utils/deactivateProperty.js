import axios from "axios";
import { baseURL } from "../../constants";

async function deactivateProperty(id) {
  try {
    const data = await axios.get(baseURL + "/api/property/deactivate/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data?.data);
  } catch (err) {
    console.log(err);
  }
}

export { deactivateProperty };
