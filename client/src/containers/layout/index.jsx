import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme, Paper } from "@mui/material";

import Aux from "hoc/Auxiliary";
import Header from "components/header/";
import Footer from "components/footer/";

const Layout = (props) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "dark",
        },
      }),
    [prefersDarkMode]
  );
  return (
    <Aux>
      <main>
        <ThemeProvider theme={theme}>
          <Paper>
            <Header />
            <div>{props.children}</div>
            <Footer />
          </Paper>
        </ThemeProvider>
      </main>
    </Aux>
  );
};

export default Layout;
