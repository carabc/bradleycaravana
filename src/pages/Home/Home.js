/** @jsx jsx */
// React and basic dependencies
import React, { useState, useEffect } from "react";

// React router dom
import { Link } from "react-router-dom";

// Material UI Styles
import { jsx, css } from "@emotion/react";
import { styled } from "@mui/system";

// Material UI Theme
import { useTheme } from "@mui/styles";

const Home = () => {
  const theme = useTheme();
  return <div>Home</div>;
};

export default Home;
