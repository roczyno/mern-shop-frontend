import "./images-page.scss";
import Navbar from "../../components/navbar/Navbar";
import SendIcon from "@mui/icons-material/Send";
import DownloadIcon from "@mui/icons-material/Download";
// import { Images } from "../../data";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ImagesPage = () => {
  const [images, setImages] = useState([]);
  const url = "http://localhost:5000/api/images/find";
  useEffect(() => {
    const getAllImages = async () => {
      try {
        const res = await axios.get(url);
        setImages(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllImages();
  });

  // console.log(typeof images);

  return (
    <div className="images">
      <Navbar />
      <div className="searchContainer">
        <input type="text" placeholder="Text here..." />
        <label>Search</label>
      </div>
      <div className="imagesContainer">
        {images &&
          images.map((item) => (
            <Link
              to={`/images/${item._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
              className="link"
            >
              <div className="image" key={item._id}>
                <img src={item.imageUrl} alt="" />
                <span>{item.title}</span>
                <p>{item.desc}</p>
                <div className="actions">
                  <span>
                    <DownloadIcon className="download" />
                  </span>
                  <span>
                    <SendIcon className="send" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ImagesPage;
