import React from "react";
import { ThemeProvider, createTheme, Paper } from "@mui/material";
import { useSelector } from "react-redux";

import Aux from "hoc/Auxiliary";
import Header from "components/header/";
import Footer from "components/footer/";

const Layout = (props) => {
  const selectedTheme = useSelector((state) => state.theme.selectedTheme);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: selectedTheme ? selectedTheme.themeName : "light",
        },
      }),
    [selectedTheme]
  );
  return (
    <Aux>
      <main>
        <ThemeProvider theme={theme}>
          <Paper style={{ height: "90vh" }}>
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
