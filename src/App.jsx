import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Email from "./pages/emailVerify/Email";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import PasswordReset from "./pages/passwordReset/PasswordReset";
import ImagesPage from "./pages/imagesPage/ImagesPage";
import SingleImage from "./pages/singleImage/SingleImage";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/images" element={<ImagesPage />} />
        <Route path="/image/:id" element={<SingleImage />} />
        <Route path="api/auth/:id/verify/:token" element={<Email />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
      </Routes>
    </div>
  );
}

export default App;
