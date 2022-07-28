import axios from "axios";
import { baseURL } from "../../constants";

async function activateProject(id) {
  try {
    const data = await axios.get(baseURL + "/api/newproject/activate/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data?.data);
  } catch (err) {
    console.log(err);
  }
}

export { activateProject };
