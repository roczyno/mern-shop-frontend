import "./images-page.scss";
import Navbar from "../../components/navbar/Navbar";
import SendIcon from "@mui/icons-material/Send";
import DownloadIcon from "@mui/icons-material/Download";
import { Images } from "../../data";

const ImagesPage = () => {
  return (
    <div className="images">
      <Navbar />
      <div className="searchContainer">
        <input type="text" placeholder="Text here..." />
        <label>Search</label>
      </div>
      <div className="imagesContainer">
        {Images.map((item) => (
          <div className="image" key={item.id}>
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
        ))}
      </div>
    </div>
  );
};

export default ImagesPage;
