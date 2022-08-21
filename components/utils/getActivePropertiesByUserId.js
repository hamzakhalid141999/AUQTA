import axios from "axios";
import { baseURL } from "../../constants";

async function fetchActivePropertiesByUserId(id, active) {
  try {
    const data = await axios.get(
      baseURL +
        "/api/property/allpropertylistings/getPropertiesOfUserWithFilter",
      {
        params: {
          userId: id,
          isActive: active,
          pageNumber: 1,
          nPerPage: 100,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data?.data;
  } catch (err) {
    console.log(err);
  }
}

export { fetchActivePropertiesByUserId };
