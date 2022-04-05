/** @jsx jsx */
// React and basic dependencies
import React, { useState, useEffect } from "react";
import "./App.css";

// React router dom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Components

import Navbar from "./components/Navbar/Navbar";
import Showcase from "./components/Showcase/Showcase";

// Pages
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";

// Material UI Styles
import { jsx, css } from "@emotion/react";
import { styled } from "@mui/system";

// Material UI Theme
import { useTheme } from "@mui/styles";

const App = () => {
  const theme = useTheme();

  return (
    <div className="App">
      <Router>
        {/* Navbar - Should always be rendered, only rendered once on page load, lives in App.js */}
        <Navbar />
        <Showcase />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
