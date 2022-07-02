import axios from "axios";
import { baseURL } from "../../constants";

async function getHomePageProjects() {
  try {
    const data = await axios.get(
      baseURL + "/api/newproject/all",
      {
        params: {
          pageNumber: 1,
          nPerPage: 4,
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

export { getHomePageProjects };
