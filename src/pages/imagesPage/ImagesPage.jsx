import "./images-page.scss";
import Navbar from "../../components/navbar/Navbar";
import SendIcon from "@mui/icons-material/Send";
import DownloadIcon from "@mui/icons-material/Download";
// import { Images } from "../../data";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import download from "downloadjs";

const ImagesPage = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const getAllImages = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/images/find?search=${searchQuery}`
        );
        setImages(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllImages();
  }, [searchQuery]);

  const downloadFile = async (id, path, mimetype) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/images/download/${id}`,
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
    }
  };

  return (
    <div className="images">
      <Navbar />
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="imagesContainer">
        {searchQuery && images.length === 0 && (
          <p
            style={{
              color: "lightgray",
            }}
          >
            No images found for "{searchQuery}"
          </p>
        )}
        {images.map((item) => (
          <div className="image" key={item._id}>
            <Link
              to={`/images/${item._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
              className="link"
            >
              <img src={item.imageUrl} alt="" />
            </Link>
            <span>{item.title}</span>
            <p>{item.desc}</p>
            <div className="actions">
              <span>
                <DownloadIcon
                  className="download"
                  onClick={() =>
                    downloadFile(item._id, item.imageUrl, item.image_mimetype)
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

export default ImagesPage;
