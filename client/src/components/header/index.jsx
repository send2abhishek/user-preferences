import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material/";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { useLocation } from "react-router-dom";

export default function ButtonAppBar() {
  const { pathname } = useLocation();
  const [showHeader, setShowHeader] = useState(true);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (pathname === "/") {
      setShowHeader(false);
    }
  }, [pathname]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: showHeader ? "block" : "none",
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User Preferences App
          </Typography>
          <Button
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            color="inherit"
          >
            Theme
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleClose}>Primary</MenuItem>
            <MenuItem onClick={handleClose}>Dark</MenuItem>
          </Menu>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}