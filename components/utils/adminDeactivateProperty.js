import axios from "axios";
import { baseURL } from "../../constants";

async function adminDeactivateProperty(id) {
  try {
    const data = await axios.get(
      baseURL + "/api/admin/property/deactivateProperty",
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

export { adminDeactivateProperty };
