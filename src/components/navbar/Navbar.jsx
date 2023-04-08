import { useContext } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
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
        {user ? (
          <span onClick={handleLogout}>Logout</span>
        ) : (
          <Link
            to="/login"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
