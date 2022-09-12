import axios from "axios";
import { baseURL } from "../../constants";

async function adminDeactivateProject(id) {
  try {
    const data = await axios.get(
      baseURL + "/api/admin/property/deactivateProperty",
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

export { adminDeactivateProject };
