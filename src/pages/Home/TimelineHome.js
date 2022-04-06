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
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
const TimelineHome = () => {
  const theme = useTheme();
  const BoxLeft = styled(Box)({
    textAlign: "center",
  });
  const StyledSubtitle = styled(Typography)({
    fontSize: ".8em",
    fontStyle: "italic",
    // color: theme.palette.highlight.yellow,
  });
  const StyledImg = styled("img")({
    width: "20%",
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
  return (
    <React.Fragment>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            {/* <BoxLeft> */}
            <StyledImg
              src={me}
              alt="Me on New Years Day 2020 after consuming 3 days worth of calories at brunch"
            />
            <StyledSubtitle variant="subtitle1">
              Me on New Years Day 2020 after consuming 3 days worth of calories
              at brunch
            </StyledSubtitle>
            {/* </BoxLeft> */}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              variant="outlined"
              sx={{ borderColor: theme.palette.highlight.yellow }}
            />
            <TimelineConnector
              sx={{ backgroundColor: theme.palette.highlight.yellow }}
            />
          </TimelineSeparator>
          <TimelineContent sx={{ display: "flex", alignItems: "center" }}>
            <BoxRight>
              <StyledBody variant="subtitle2">
                I attended College at Farmingdale State College and graduated
                with a B.S in Computer Programming & Information Systems.
              </StyledBody>
            </BoxRight>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            12:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            9:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Repeat</TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
  );
};

export default TimelineHome;
