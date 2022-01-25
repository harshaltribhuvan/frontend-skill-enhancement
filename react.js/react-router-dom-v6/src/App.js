import "./styles.css";
import Home from "./component/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import NotFound from "./component/NotFound";
import Post from "./component/Post";
import Dashboard from "./component/Dashboard";
import Login from "./component/Login";

export default function App() {
  let data = {
    st: "User is not logged in"
  };
  let isLogged = false;
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:category" element={<Post />} />
          <Route
            path="/dashboard"
            element={
              isLogged ? (
                <Dashboard />
              ) : (
                <Navigate to="/login" replace state={data} />
              )
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
