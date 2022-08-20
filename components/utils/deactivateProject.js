import axios from "axios";
import { baseURL } from "../../constants";

async function deactivateProject(id) {
  try {
    const data = await axios.get(baseURL + "/api/newproject/deactivate/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err);
  }
}

export { deactivateProject };
