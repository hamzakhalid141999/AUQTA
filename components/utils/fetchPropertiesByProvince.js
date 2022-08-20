import axios from "axios";
import { baseURL } from "../../constants";

async function getPropertiesByProvince(province) {
  try {
    const data = await axios.get(
      baseURL + "/api/property/filter",
      {
        params: {
          pageNumber: 1,
          nPerPage: 4,
          province: province,
          purpose: "sell",
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

export { getPropertiesByProvince };
