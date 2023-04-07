import "./register.scss";
import Img from "../../images/img-01.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });

      res.data && navigate("/");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div className="register">
      <div className="container">
        <div className="left">
          <img src={Img} alt="" />
        </div>
        <div className="right">
          <h1>Member Register</h1>
          <form action="">
            <input
              type="text"
              placeholder="username"
              className="input"
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="email"
              placeholder="email"
              className="input"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="password"
              className="input"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleClick}>Register</button>
          </form>
          {error && <span style={{ color: "red" }}>{error}</span>}
          <span className="loginbtn">
            <Link
              to="/login"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Already have an account ? login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
