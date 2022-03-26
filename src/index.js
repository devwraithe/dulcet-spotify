import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/app";
import Loader from "./pages/loader";
import Login from "./pages/login";
import UserProfile from "./pages/userProfile";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <UserProfile />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
