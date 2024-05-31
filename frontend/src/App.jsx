import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

const routes = (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  </Router>
);

const App = () => {
  return <div>{routes}</div>;
};
export default App;
