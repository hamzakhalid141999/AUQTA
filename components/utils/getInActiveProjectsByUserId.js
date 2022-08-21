import axios from "axios";
import { baseURL } from "../../constants";

async function fetchInActiveProjectsByUserId(id, inActive) {
  try {
    const data = await axios.get(
      baseURL + "/api/newproject/getProjectsOfUserWithFilter",
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

export { fetchInActiveProjectsByUserId };
