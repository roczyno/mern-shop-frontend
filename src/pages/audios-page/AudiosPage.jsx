import "./audios-page.scss";
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

  const PF = "http://localhost:5000/";
  useEffect(() => {
    const getAllAudios = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/audios/find?search=${searchQuery}`
        );

        setVideos(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllAudios();
  }, [searchQuery]);

  const downloadFile = async (id, path, mimetype) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/audios/download/${id}`,
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

  return (
    <div className="audios">
      <Navbar />
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="audiosContainer">
        {searchQuery && audios.length === 0 && (
          <p
            style={{
              color: "lightgray",
            }}
          >
            No audios found for "{searchQuery}"
          </p>
        )}
        {videos.map((item) => (
          <div className="audio" key={item._id}>
            <Link
              to={`/audios/${item._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
              className="link"
            >
              <audio progress controls src={PF + item.audio} />
            </Link>
            <span>{item.title}</span>
            <p>{item.desc}</p>
            <div className="actions">
              <span>
                <DownloadIcon
                  className="download"
                  onClick={() =>
                    downloadFile(item._id, item.audio, item.audio_mimetype)
                  }
                />
              </span>
              <span>
                <SendIcon className="send" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosPage;
