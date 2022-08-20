import axios from "axios";
import { baseURL } from "../../constants";

async function sendInquiry(
  receiver,
  name,
  email,
  phone,
  type,
  body,
  realEstateId,
  userType,
  propertyOrProject,
  realEstateName
) {
  try {
    const data = await axios.post(
      baseURL + "/api/inbox/addmessage",
      {
        receiver: receiver,
        type: type,
        body: body,
        timeAdded: Math.floor(Date.now() / 1000),
        fields: {
          propertyId: realEstateId,
          name: name,
          email,
          email,
          phone: phone,
          userType: userType,
          propertyOrProject: propertyOrProject,
          propertyName: realEstateName,
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

export { sendInquiry };
