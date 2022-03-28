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
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { updateSelectedTheme, logoutRequest } from "reduxSlices/themeSlice";

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const [showHeader, setShowHeader] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const themeList = useSelector((state) => state.theme.themeList);
  const isLoggedIn = useSelector((state) => state.theme.isLoggedIn);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (themeId) => {
    dispatch(
      updateSelectedTheme(themeList.find((item) => item.id === themeId))
    );
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log("logout called");
    dispatch(logoutRequest());
    setShowHeader(false);
    navigate("/");
  };

  useEffect(() => {
    if (isLoggedIn) {
      setShowHeader(true);
    }
  }, [isLoggedIn]);

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
            {themeList.map((item, index) => (
              <MenuItem key={index} onClick={() => handleThemeChange(item.id)}>
                {item.themeName}
              </MenuItem>
            ))}
          </Menu>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
