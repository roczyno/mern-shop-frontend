import "./login.scss";
import Img from "../../images/img-01.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="left">
          <img src={Img} alt="" />
        </div>
        <div className="right">
          <h1>Member Login</h1>
          <form action="">
            <input type="email" placeholder="email" className="input" />
            <input type="password" placeholder="password" className="input" />
            <button>Login</button>
          </form>
          <span>forgot password ?</span>

          <span className="loginbtn">
            Create your account
            <ArrowRightAltIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
