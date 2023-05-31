import { useLocation } from "react-router-dom";
import "./single-image.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const SingleImage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [image, setImage] = useState([]);
  const PF = "https://file-server-api.onrender.com/";

  useEffect(() => {
    const getImage = async () => {
      const res = await axios.get(
        "https://file-server-api.onrender.com/api/images/find/" + id,
        {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      setImage(res.data);
    };
    getImage();
  });

  return (
    <div className="single-image">
      <div className="container">
        <img src={PF + image.imageUrl} alt="" />
      </div>
    </div>
  );
};

export default SingleImage;
