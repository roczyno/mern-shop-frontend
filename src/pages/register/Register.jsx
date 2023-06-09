import "./register.scss";
import Img from "../../images/img-01.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        " https://file-server-api.onrender.com/api/auth/register",
        {
          username,
          email,
          password,
        }
      );
      setMsg(res.data.message);
      console.log(res);
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
            <span style={{ color: "gray" }}>
              Password must contain one upperCase letter, one symbol and should
              be at least 8 characters long
            </span>
            <button onClick={handleClick}>Register</button>
          </form>
          {error && <span style={{ color: "red" }}>{error}</span>}
          {msg && <span style={{ color: "red" }}>{msg}</span>}
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
