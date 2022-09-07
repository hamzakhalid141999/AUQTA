import axios from "axios";
import { baseURL } from "../../constants";

async function getAdminProperties() {
  try {
    const data = await axios.get(
      baseURL + "/api/admin/property/getAllPropertiesAsAdmin",
      {
        params: {
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

export { getAdminProperties };
