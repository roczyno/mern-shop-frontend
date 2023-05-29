import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Email from "./pages/emailVerify/Email";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import PasswordReset from "./pages/passwordReset/PasswordReset";
import ImagesPage from "./pages/imagesPage/ImagesPage";
import SingleImage from "./pages/singleImage/SingleImage";
import SingleVideo from "./pages/singleVideo/SingleVideo";
import VideosPage from "./pages/videos-Page/VideosPage";
import AudiosPage from "./pages/audios-page/AudiosPage";
import PdfPage from "./pages/pdfPage/PdfPage";
import SinglePdf from "./pages/single-pdf/SinglePdf";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/images" element={user ? <ImagesPage /> : <Login />} />
        <Route path="/videos" element={user ? <VideosPage /> : <Login />} />
        <Route path="/audios" element={user ? <AudiosPage /> : <Login />} />
        <Route path="/pdf" element={user ? <PdfPage /> : <Login />} />
        <Route
          path="/images/:id"
          element={user ? <SingleImage /> : <Login />}
        />
        <Route
          path="/videos/:id"
          element={user ? <SingleVideo /> : <Login />}
        />
        <Route path="/pdf/:id" element={user ? <SinglePdf /> : <Login />} />
        <Route
          path="api/auth/:id/verify/:token"
          element={user ? <Email /> : <Login />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
      </Routes>
    </div>
  );
}

export default App;
