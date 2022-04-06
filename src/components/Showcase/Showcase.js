/** @jsx jsx */
// React and basic dependencies
import React, { useState, useEffect } from "react";

// Images
import docks from "../../images/docks.JPG";
import family from "../../images/family.jpg";
import me from "../../images/me.JPG";

// React router dom
import { Link, useLocation } from "react-router-dom";

// MUI Components
import { Box, Button, Container, Typography } from "@mui/material";

// Material UI Styles
import { jsx, css } from "@emotion/react";
import { styled } from "@mui/system";

// Material UI Theme
import { useTheme } from "@mui/styles";

const Showcase = ({ title, subtitle }) => {
  const theme = useTheme();
  const location = useLocation();
  const pathname = location.pathname;
  const StyledBox = styled(Box)({
    display: "flex",
    height: "100%",
    backgroundSize: "cover",
    backgroundImage: `url(${docks})`,
    alignItems: "center",
    // borderBottom: `2px solid ${theme.palette.highlight.yellow}`,
  });
  const StyledSpan = styled("span")({
    color: theme.palette.highlight.blueHighlight,
  });
  const StyledTypography = styled(Typography)({
    color: theme.palette.primary.type,
    fontWeight: "550",
  });
  const StyledSubtitle = styled(Typography)({
    fontSize: "1.25em",
    // color: theme.palette.primary.type,
    color: theme.palette.highlight.blueHighlight,
  });
  const StyledButton = styled(Button)({
    marginTop: ".5em",
    borderColor: theme.palette.primary.type,
    color: theme.palette.primary.type,
    "&:hover": {
      borderColor: theme.palette.primary.blueHighlightSecondary,
      color: theme.palette.highlight.blueHighlight,
      backgroundColor: theme.palette.transBg.blue,
    },
  });

  return (
    <StyledBox>
      <Container>
        <StyledTypography variant="h2">
          Hi, I'm <StyledSpan>Bradley</StyledSpan>.
        </StyledTypography>
        <StyledSubtitle variant="subtitle2">
          {pathname === "/blog"
            ? "Welcome to my blog."
            : "I'm a full-stack developer from Long Island, New York."}
        </StyledSubtitle>
        <StyledButton variant="outlined" component={Link} to="/portfolio">
          See my work
        </StyledButton>
      </Container>
    </StyledBox>
  );
};

export default Showcase;
