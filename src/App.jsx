import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Email from "./pages/emailVerify/Email";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ap/auth/:id/verify/:token" element={<Email />} />
      </Routes>
    </div>
  );
}

export default App;
