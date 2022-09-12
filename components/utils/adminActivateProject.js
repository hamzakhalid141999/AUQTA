import axios from "axios";
import { baseURL } from "../../constants";

async function adminActivateProject(id) {
  try {
    const data = await axios.get(
      baseURL + "/api/admin/property/activateProperty",
      {
        params: {
          propertyOrProject: "project",
          propertyId: id,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
}

export { adminActivateProject };
