import "./videosPage.scss";
import Navbar from "../../components/navbar/Navbar";
import SendIcon from "@mui/icons-material/Send";
import DownloadIcon from "@mui/icons-material/Download";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import download from "downloadjs";

const VideosPage = () => {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showForms, setShowForms] = useState(false);
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const PF = " https://file-server-api.onrender.com/";
  useEffect(() => {
    const getAllVideos = async () => {
      try {
        const res = await axios.get(
          ` https://file-server-api.onrender.com/api/videos/find?search=${searchQuery}`
        );

        setVideos(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllVideos();
  }, [searchQuery]);

  const downloadFile = async (id, path, mimetype) => {
    try {
      const res = await axios.get(
        ` https://file-server-api.onrender.com/api/videos/download/${id}`,
        {
          responseType: "blob",
        }
      );

      const split = path.split("/");
      const filename = split[split.length - 1];
      setErrorMsg("");
      return download(res.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg("Error while downloading file. Try again later");
      }
      console.log(error);
    }
  };

  const sendEmail = async (e, selectedVideo) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://file-server-api.onrender.com/api/email/send-email",
        {
          recipient,
          subject,
          message,
          attachment: selectedVideo.video,
        }
      );
      alert("email sent successfully");

      // Reset form fields and download link
      setRecipient("");
      setSubject("");
      setMessage("");
      setShowForms(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="videos">
      <Navbar />
      {showForms ? (
        <form onSubmit={(e) => sendEmail(e, selectedVideo)}>
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

          <button type="submit">Send Email</button>
        </form>
      ) : (
        <>
          <div className="searchContainer">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="videosContainer">
            {searchQuery && videos.length === 0 && (
              <p
                style={{
                  color: "lightgray",
                }}
              >
                No videos found for "{searchQuery}"
              </p>
            )}
            {videos.map((item) => (
              <div className="video" key={item._id}>
                <Link
                  to={`/videos/${item._id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  className="link"
                >
                  <video
                    progress
                    controls
                    controlsList="nodownload"
                    src={PF + item.video}
                  />
                </Link>
                <span>{item.title}</span>
                <p>{item.desc}</p>
                <div className="actions">
                  <span>
                    <DownloadIcon
                      className="download"
                      onClick={() =>
                        downloadFile(item._id, item.video, item.video_mimetype)
                      }
                    />
                  </span>
                  <span>
                    <SendIcon
                      className="send"
                      onClick={() => {
                        setSelectedVideo(item);
                        setShowForms(true);
                      }}
                    />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default VideosPage;
