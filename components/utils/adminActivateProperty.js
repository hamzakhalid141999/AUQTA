import axios from "axios";
import { baseURL } from "../../constants";

async function adminActivateProperty(id) {
  try {
    const data = await axios.get(
      baseURL + "/api/admin/property/activateProperty",
      {
        params: {
          propertyOrProject: "property",
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

export { adminActivateProperty };
