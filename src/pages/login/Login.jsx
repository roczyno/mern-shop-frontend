import "./login.scss";
import Img from "../../images/img-01.png";

import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import axios from "axios";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { dispatch, isFetching } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "LOGIN_START" });
      const res = await axios.post(
        "https://file-server-api.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
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
    <div className="login">
      <div className="container">
        <div className="left">
          <img src={Img} alt="" />
        </div>
        <div className="right">
          <h1>Member Login</h1>
          <form action="">
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

            <button onClick={handleClick} disabled={isFetching}>
              Login
            </button>
          </form>
          {error && <span style={{ color: "red" }}>{error}</span>}
          <span>
            <Link
              to="/forgot-password"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              forgot password ?
            </Link>
          </span>

          <span className="regbtn">
            <Link
              to="/register"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Create your account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
