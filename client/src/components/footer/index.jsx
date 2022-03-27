import React from "react";
import { Typography, Link, Grid } from "@mui/material/";

const Copyright = (props) => {
  return (
    <Grid container>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
        sx={{ position: "fixed", bottom: "0", width: "100%" }}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          User Preferences App
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Grid>
  );
};

export default Copyright;
