import axios from "axios";
import { baseURL } from "../../constants";

async function getProjectsByUserId(userId) {
  try {
    const data = await axios.get(
      baseURL + "/api/newproject/allnewprojects/id/" + userId,
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

export { getProjectsByUserId };
