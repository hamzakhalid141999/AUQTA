import axios from "axios";
import { baseURL } from "../../constants";

async function fetchActiveProjectsByUserId(id, active) {
  try {
    const data = await axios.get(
      baseURL + "/api/newproject/getProjectsOfUserWithFilter",
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

export { fetchActiveProjectsByUserId };
