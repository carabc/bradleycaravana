/** @jsx jsx */
// React and basic dependencies
import React from "react";

// MUI Components
import { Typography } from "@mui/material";

// Material UI Styles
import { jsx } from "@emotion/react";
import { styled } from "@mui/system";

// Material UI Theme
import { useTheme } from "@mui/styles";

// Moment
import moment from "moment";

const Footer = () => {
  const theme = useTheme();

  const StyledFooter = styled("footer")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.primary.main,
    color: theme.palette.highlight.orange,
    padding: "1.5em",
    marginTop: "3em",
  });
  const StyledTypography = styled(Typography)({
    color: theme.palette.highlight.orange,
  });
  return (
    <StyledFooter>
      <StyledTypography>
        Bradley Caravana &copy; {moment().year()}
      </StyledTypography>
    </StyledFooter>
  );
};

export default Footer;
