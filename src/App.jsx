import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="L-Odin6-Sign-up-Form/" element={<SignUpPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<HomePage />} />
        <Route path="contact" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
