/** @jsx jsx */
// React and basic dependencies
import React, { useState, useEffect } from "react";

// Images
import docks from "../../images/docks.JPG";
import family from "../../images/family.jpg";
import me from "../../images/me.JPG";

// React router dom
import { Link } from "react-router-dom";

// MUI Components
import { Box, Button, Container, Typography } from "@mui/material";

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
