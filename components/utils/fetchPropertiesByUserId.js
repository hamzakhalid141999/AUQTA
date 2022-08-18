import axios from "axios";
import { baseURL } from "../../constants";

async function getPropertiesByUserId(userId) {
  try {
    const data = await axios.get(
      baseURL +
        "/api/property/allpropertylistings/activeandinactive/id/" +
        userId,
      {
        params: {
          pageNumber: 1,
          nPerPage: 20,
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

export { getPropertiesByUserId };
