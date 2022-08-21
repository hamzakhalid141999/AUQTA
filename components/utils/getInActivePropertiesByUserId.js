import axios from "axios";
import { baseURL } from "../../constants";

async function fetchInActivePropertiesByUserId(id, inActive) {
  try {
    const data = await axios.get(
      baseURL +
        "/api/property/allpropertylistings/getPropertiesOfUserWithFilter",
      {
        params: {
          userId: id,
          isInactive: inActive,
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

export { fetchInActivePropertiesByUserId };
