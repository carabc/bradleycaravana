/** @jsx jsx */
import React, { useState, useEffect } from "react";

// React router dom
import { Link, useLocation } from "react-router-dom";

// MUI
import {
  Fab,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Typography,
  Divider,
} from "@mui/material";

// MUI Theme
import { useTheme } from "@mui/styles";

// Styling
import { jsx, css } from "@emotion/react";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import EmailIcon from "@mui/icons-material/Email";
const Navbar = () => {
  const theme = useTheme();
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (isOpen) => {
    setIsDrawerOpen(isOpen);
  };

  const styles = {
    icon: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.type,
      position: "absolute",
      top: 100,
      left: 100,

      "&:hover": {
        backgroundColor: theme.palette.highlight.blueHighlight,
      },
    },

    drawer: {},

    menuBox: {
      width: 300,
      height: "100%",
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.type,
    },

    headerText: {
      padding: ".5em",
    },

    listItem: {
      color: theme.palette.primary.type,
    },
    listItemSelected: {
      borderRight: `3px solid ${theme.palette.highlight.yellow}`,
      color: theme.palette.primary.type,
    },

    listIcon: {
      minWidth: "40px",
      color: theme.palette.highlight.yellow,
    },
  };

  const renderMenu = () => (
    <Box sx={styles.menuBox}>
      <Typography align="center" variant="h5" sx={styles.headerText}>
        Bradley Caravana
      </Typography>
      <Divider />
      <List>
        <ListItem
          component={Link}
          to="/"
          sx={
            location.pathname === "/"
              ? styles.listItemSelected
              : styles.listItem
          }
          onClick={() => toggleDrawer(false)}
        >
          <ListItemButton>
            <ListItemIcon sx={styles.listIcon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem
          component={Link}
          to="/blog"
          sx={
            location.pathname === "/blog"
              ? styles.listItemSelected
              : styles.listItem
          }
          onClick={() => toggleDrawer(false)}
        >
          <ListItemButton>
            <ListItemIcon sx={styles.listIcon}>
              <RssFeedIcon />
            </ListItemIcon>
            <ListItemText primary="Blog"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem
          component={Link}
          to="/portfolio"
          sx={
            location.pathname === "/portfolio"
              ? styles.listItemSelected
              : styles.listItem
          }
          onClick={() => toggleDrawer(false)}
        >
          <ListItemButton>
            <ListItemIcon sx={styles.listIcon}>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Portfolio"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem
          component={Link}
          to="/contact"
          sx={
            location.pathname === "/contact"
              ? styles.listItemSelected
              : styles.listItem
          }
          onClick={() => toggleDrawer(false)}
        >
          <ListItemButton>
            <ListItemIcon sx={styles.listIcon}>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact"></ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Fab
        aria-label="menu"
        sx={styles.icon}
        onClick={() => toggleDrawer(true)}
      >
        <MenuIcon fontSize="large" />
      </Fab>
      <Drawer
        sx={styles.drawer}
        anchor="left"
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        {renderMenu()}
      </Drawer>
    </>
  );
};

export default Navbar;
