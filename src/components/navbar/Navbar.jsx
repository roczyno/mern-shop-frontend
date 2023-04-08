import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">Shop</div>
      <div className="right">
        <span>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            Home
          </Link>
        </span>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          About
        </Link>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          Contact
        </Link>
        <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
