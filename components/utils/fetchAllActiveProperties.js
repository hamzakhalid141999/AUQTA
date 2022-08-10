import axios from "axios";
import { baseURL } from "../../constants";

async function getAllProperties() {
  try {
    const data = await axios.get(baseURL + "/api/property/all", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data?.data;
  } catch (err) {
    console.log(err);
  }
}

export { getAllProperties };
