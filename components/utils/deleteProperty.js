import axios from "axios";
import { baseURL } from "../../constants";

async function deleteProperty(id) {
  try {
    const data = await axios.delete(baseURL + "/api/property/delete/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err);
  }
}

export { deleteProperty };
