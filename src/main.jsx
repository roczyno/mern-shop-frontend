import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
