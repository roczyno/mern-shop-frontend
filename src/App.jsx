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

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/images" element={<ImagesPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/audios" element={<AudiosPage />} />
        <Route path="/pdf" element={<PdfPage />} />
        <Route path="/images/:id" element={<SingleImage />} />
        <Route path="/videos/:id" element={<SingleVideo />} />
        <Route path="/pdf/:id" element={<SinglePdf />} />
        <Route path="api/auth/:id/verify/:token" element={<Email />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
      </Routes>
    </div>
  );
}

export default App;
