import React from "react";
import { Typography, Link, Grid } from "@mui/material/";

const Copyright = (props) => {
  return (
    <Grid container>
      <Typography
        variant="body2"
        align="center"
        {...props}
        sx={{ position: "fixed", bottom: "0", width: "100%", color: "black" }}
      >
        {"Copyright ©  User Preferences App "}

        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Grid>
  );
};

export default Copyright;
