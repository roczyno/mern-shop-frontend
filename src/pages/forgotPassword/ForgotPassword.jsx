import { useState } from "react";
import "./ForgotPassword.scss";
import axios from "axios";

const ForgotPassword = () => {
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/password-reset",
        { email }
      );
      console.log(res.data);
      setMsg(res.data.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        setMsg("");
      }
    }
  };

  return (
    <div className="forgot-password">
      <form onSubmit={handleSubmit}>
        <h1>Forgot Password</h1>
        <input
          type="email"
          placeholder="email"
          className="input"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Submit</button>
        {error && <span style={{ color: "red" }}>{error}</span>}
        {msg && <span style={{ color: "red" }}>{msg}</span>}
      </form>
    </div>
  );
};

export default ForgotPassword;
