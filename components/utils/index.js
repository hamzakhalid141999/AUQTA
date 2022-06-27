import axios from "axios";
import { baseURL } from "../../constants";

async function getAllCities() {
  try {
    const data = await axios.get(baseURL + "/api/cities/all", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data?.data;
  } catch (err) {
    console.log(err);
  }
}

export { getAllCities };
