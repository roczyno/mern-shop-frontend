import React from "react";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const SendEmail = () => {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [attachmentUrl, setAttachmentUrl] = useState("");
  const location = useLocation();
  console.log(location);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailData = {
      recipient,
      subject,
      message,
      attachmentUrl,
    };

    try {
      await axios.post("/send-email", emailData);
    } catch (error) {}
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Recipient Email"
          value={recipient}
          onChange={(event) => setRecipient(event.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <input
          type="text"
          placeholder="Attachment URL"
          value={attachmentUrl}
          onChange={(event) => setAttachmentUrl(event.target.value)}
        />
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default SendEmail;
