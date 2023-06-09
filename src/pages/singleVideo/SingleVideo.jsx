import { useLocation } from "react-router-dom";
import "./single-video.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const SingleVideo = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [video, setVideo] = useState([]);
  const PF = " http://localhost:5000/";

  useEffect(() => {
    try {
      const getVideo = async () => {
        const res = await axios.get(
          " http://localhost:5000/api/videos/find/" + id
        );
        setVideo(res.data);
      };
      getVideo();
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className="single-video">
      <div className="container">
        <video
          height="500px"
          width="800px"
          src={PF + video.video}
          alt=""
          controls
        ></video>
      </div>
    </div>
  );
};

export default SingleVideo;
