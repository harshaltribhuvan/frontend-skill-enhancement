import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Menu from "./pages/menu";
import Contact from "./pages/contact";
import Footer from "./components/Footer";
import Dropdown from "./components/Dropdown";
//animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
