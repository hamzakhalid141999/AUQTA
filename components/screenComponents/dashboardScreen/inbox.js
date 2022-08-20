import React, { useEffect, useState } from "react";
import classes from "./forms.module.css";
import { useAuth } from "../../../contextAPI";
import { getInboxByUserId } from "../../utils/fetchInboxByUserId";
import { convertTimeStampIntoDate } from "../../utils/formattedDateTime";
import { ClipLoader } from "react-spinners";
// convertTimeStampIntoDate

function Inbox() {
  const { user } = useAuth();
  const [userId, setUser] = useState();
  const [messages, setMessages] = useState([]);
  const [activeMessageId, setActiveMessageId] = useState();
  const [activeMessageIndex, setActiveMessageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setUser(user?.id);
    }
  }, [user]);

  useEffect(() => {
    const handleFetchUserInbox = async () => {
      if (userId) {
        const data = await getInboxByUserId(userId);
        for (var i = 0; i < data?.messages?.length; i++) {
          const converted = await convertTimeStampIntoDate(
            data?.messages[i]?.timeAdded
          );
          data.messages[i].time = await convertTimeStampIntoDate(
            data?.messages[i]?.timeAdded
          );
          setMessages(data?.messages);
          setActiveMessageId(data?.messages[0]?._id);
        }
        setLoading(false);
      }
    };
    handleFetchUserInbox();
  }, [userId]);

  const handleActiveMessage = (id, index) => {
    setActiveMessageId(id);
    setActiveMessageIndex(index);
  };

  return (
    <div className={classes.form_body}>
      {loading ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <ClipLoader size={"20px"} color="black" />
        </div>
      ) : messages?.length === 0 ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <p style={{ color: "grey" }}>No Inboxes</p>
        </div>
      ) : (
        messages?.length > 0 && (
          <div className={classes.inbox_container}>
            <div className={classes.all_msgs_container}>
              {messages?.map((message, index) => (
                <div
                  key={index}
                  onClick={() => {
                    handleActiveMessage(message?._id, index);
                  }}
                  className={
                    activeMessageId === message?._id
                      ? classes.single_inbox_container_active
                      : classes.single_inbox_container_inactive
                  }
                >
                  <h1>{message?.fields?.name}</h1>
                  <p>{message?.fields?.propertyName}</p>
                </div>
              ))}
            </div>
            <div className={classes.message_container}>
              <div className={classes.message_header}>
                <p>{messages[activeMessageIndex]?.time}</p>
                <h1>
                  {messages && messages[activeMessageIndex]?.fields?.name}
                </h1>
              </div>
              <div className={classes.message_body}>
                <p>{messages[activeMessageIndex]?.body}</p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Inbox;
