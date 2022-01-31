import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Work from "./component/Work";
import Contact from "./component/Contact";
import About from "./component/About";
import Card from "./component/Card";

ReactDOM.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="work" element={<Work />} />
      <Route path="about" element={<About />} />
      <Route path="card/:id" element={<Card />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
