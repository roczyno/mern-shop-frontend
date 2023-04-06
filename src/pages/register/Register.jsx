import "./register.scss";
import Img from "../../images/img-01.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Register = () => {
  return (
    <div className="register">
      <div className="container">
        <div className="left">
          <img src={Img} alt="" />
        </div>
        <div className="right">
          <h1>Member Register</h1>
          <form action="">
            <input type="text" placeholder="username" className="input" />

            <input type="email" placeholder="email" className="input" />

            <input type="password" placeholder="password" className="input" />

            <button>Register</button>
          </form>

          <span className="loginbtn">
            login
            <ArrowRightAltIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
