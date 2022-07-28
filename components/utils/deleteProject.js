import axios from "axios";
import { baseURL } from "../../constants";

async function deleteProject(id) {
  try {
    const data = await axios.delete(baseURL + "/api/newproject/delete/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data?.data);
  } catch (err) {
    console.log(err);
  }
}

export { deleteProject };
