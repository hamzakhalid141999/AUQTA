import axios from "axios";
import { baseURL } from "../../constants";

async function updateUserType(userId, userType) {
  try {
    const data = await axios.post(
      baseURL + "/api/user/updateusertype",
      {
        userId: userId,
        userType: userType,
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

export { updateUserType };
