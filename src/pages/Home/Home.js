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

  const StyledContainer = styled(Container)({
    color: theme.palette.primary.type,
  });
  const StyledDiv = styled("div")({
    display: "flex",
    justifyContent: "center",
    marginTop: "1em",
  });
  const StyledHeader = styled(Typography)({
    display: "inline",
    // background: theme.palette.highlight.orange,
    padding: ".15em",
    fontSize: "2em",
    color: theme.palette.highlight.orange,
  });

  const StyledBox = styled(Box)({
    display: "flex",
    flexDirection: "row",
    gap: "1.5em",
    marginTop: "1.5em",
  });
  const BoxLeft = styled(Box)({
    textAlign: "center",
  });
  const StyledSubtitle = styled(Typography)({
    fontSize: ".8em",
    fontStyle: "italic",
    // color: theme.palette.highlight.yellow,
  });
  const StyledImg = styled("img")({
    width: "50%",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.highlight.yellow}`,
    // borderColor: ,
    transition: "all 0.2s ease",
    "&:hover": {
      borderRadius: "0",
    },
  });
  const BoxRight = styled(Box)({
    display: "flex",
    alignItems: "center",
  });
  const StyledBody = styled(Typography)({
    color: theme.palette.highlight.orange,
    fontSize: "1.25em",
  });

  const StyledCenterBox = styled(Box)({
    color: theme.palette.highlight.orange,
    textAlign: "center",
  });
  const StyledOutro = styled(Typography)({
    fontSize: "1.25em",
    marginTop: "2em",
  });
  const StyledLink = styled(Link)({
    borderBottom: `1px solid ${theme.palette.highlight.yellow}`,
    color: theme.palette.highlight.yellow,
    textDecoration: "none",
    fontSize: "inherit",
  });

  return (
    <StyledContainer>
      <StyledDiv>
        <StyledHeader align="center">
          I'm a JavaScript developer from Long Island, New York.{" "}
        </StyledHeader>
      </StyledDiv>
      <StyledBox>
        <BoxLeft>
          <StyledImg
            src={me}
            alt="Me on New Years Day 2020 after consuming 3 days worth of calories at brunch"
          />
          <StyledSubtitle variant="subtitle1">
            Me on New Years Day 2020 after consuming 3 days worth of calories at
            brunch
          </StyledSubtitle>
        </BoxLeft>
        <BoxRight>
          <StyledBody variant="subtitle2">
            I attended College at Farmingdale State College and graduated with a
            B.S in Computer Programming & Information Systems.
          </StyledBody>
        </BoxRight>
      </StyledBox>
      <StyledBox>
        <BoxRight>
          <StyledBody variant="subtitle2">
            My goal with this website is to have a place to display the work
            I've completed in my career so far, as well as having a medium to
            share information that I learn along the way.
          </StyledBody>
        </BoxRight>
        <BoxLeft>
          <StyledImg
            src={family}
            alt="Me and the family at my baby cousins gender reveal. (It's a boy!)"
          />
          <StyledSubtitle variant="subtitle1">
            Me and the family at my baby cousins gender reveal. (It's a boy!)
          </StyledSubtitle>
        </BoxLeft>
      </StyledBox>
      <StyledCenterBox>
        <StyledOutro>
          Checkout my blog posts <StyledLink to="/blog">here</StyledLink>, and
          if you're interested,{" "}
          <StyledLink to="/contact">drop me a line</StyledLink>. Thanks for
          stopping by.
        </StyledOutro>
      </StyledCenterBox>
    </StyledContainer>
  );
};

export default Home;
