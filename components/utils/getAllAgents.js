import axios from "axios";
import { baseURL } from "../../constants";

async function getAllAgents() {
  try {
    const data = await axios.get(
      baseURL + "/api/user/allagents",
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

export { getAllAgents };
