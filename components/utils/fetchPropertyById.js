import axios from "axios";
import { baseURL } from "../../constants";

async function getPropertyDetailsById(id) {
  try {
    const data = await axios.get(baseURL + "/api/property/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data?.data;
  } catch (err) {
    console.log(err);
  }
}

export { getPropertyDetailsById };
