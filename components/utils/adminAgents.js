import axios from "axios";
import { baseURL } from "../../constants";

async function getAdminAgents() {
  try {
    const data = await axios.get(
      baseURL + "/api/admin/user/allagents",
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

export { getAdminAgents };
