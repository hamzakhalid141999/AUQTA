import axios from "axios";
import { baseURL } from "../../constants";

async function getProjectDetailsById(id) {
  try {
    const data = await axios.get(baseURL + "/api/newproject/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data?.data;
  } catch (err) {
    console.log(err);
  }
}

export { getProjectDetailsById };
