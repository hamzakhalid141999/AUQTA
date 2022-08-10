import axios from "axios";
import { baseURL } from "../../constants";

async function getAllDevelopers() {
  try {
    const data = await axios.get(
      baseURL + "/api/user/alldevelopers",
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

export { getAllDevelopers };
