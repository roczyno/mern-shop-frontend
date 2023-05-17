import "./main.scss";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <p>Welcome to Hannah's Shop</p>
      <div className="container">
        <Link to="/pdf" style={{ color: "inherit", textDecoration: "none" }}>
          <div className="main-item">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <div className="title">click to view available Pdf's</div>
          </div>
        </Link>
        <Link to="/images" style={{ color: "inherit", textDecoration: "none" }}>
          <div className="main-item">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <div className="title">click to view available images</div>
          </div>
        </Link>
        <Link to="videos" style={{ color: "inherit", textDecoration: "none" }}>
          <div className="main-item">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <div className="title">click to view available videos</div>
          </div>
        </Link>
        <Link to="audios" style={{ color: "inherit", textDecoration: "none" }}>
          <div className="main-item">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <div className="title">click to view available audios</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Main;
