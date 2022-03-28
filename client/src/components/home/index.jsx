import { Grid, Typography } from "@mui/material";
import React from "react";

import { useSelector } from "react-redux";

const Home = () => {
  const selectedTheme = useSelector((state) => state.theme.selectedTheme);

  return (
    <div>
      <Grid container>
        <Grid container item xs={12}>
          <Typography
            component="div"
            align="center"
            sx={{
              width: "100%",
              margin: "0 auto",
              padding: "5rem",
              fontSize: "2rem",
            }}
          >
            <Typography variant="h4">
              Welcome{" "}
              <span style={{ fontSize: "1.5rem" }}>
                {sessionStorage.getItem("name")}
              </span>
            </Typography>
            <Typography>
              {" "}
              Current Preference theme is{" "}
              {selectedTheme ? selectedTheme : "light"}{" "}
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
