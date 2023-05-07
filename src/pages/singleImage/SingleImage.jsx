import { useLocation } from "react-router-dom";
import "./single-image.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const SingleImage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [image, setImage] = useState([]);
  useEffect(() => {
    const getImage = async () => {
      const res = await axios.get(
        "http://localhost:5000/api/images/find/" + id
      );
      setImage(res.data);
    };
    getImage();
  });

  return (
    <div className="single-image">
      <div className="container">
        <img src={image.imageUrl} alt="" />
      </div>
    </div>
  );
};

export default SingleImage;
