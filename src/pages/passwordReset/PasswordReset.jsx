import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./passwordReset.scss";

const PasswordReset = () => {
  const [validUrl, setValidUrl] = useState(false);
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUrl = async () => {
      try {
        await axios.get(
          ` https://file-server-api.onrender.com/api/auth/password-reset/${param.id}/${param.token}`
        );
        setValidUrl(true);
      } catch (error) {
        setValidUrl(false);
      }
    };
    verifyUrl();
  }, [param]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        ` https://file-server-api.onrender.com/api/auth/password-reset/${param.id}/${param.token}`,
        { password }
      );
      setMsg(res.data.message);
      setError("");
      navigate("/login");
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
    <div className="password-reset">
      <>
        {validUrl ? (
          <div className="container">
            <h1>Add new Password</h1>
            <form action="">
              <input
                type="password"
                placeholder="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <span style={{ color: "red" }}>{error}</span>}
              {msg && <span style={{ color: "red" }}>{msg}</span>}
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div>404 not found</div>
        )}
      </>
    </div>
  );
};

export default PasswordReset;
