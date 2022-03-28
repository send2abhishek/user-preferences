import React, { useEffect } from "react";
import { ThemeProvider, createTheme, Paper } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import Aux from "hoc/Auxiliary";
import Header from "components/header/";
import Footer from "components/footer/";
import { fetchUserCurrentTheme } from "reduxSlices/themeSlice";
import Backdrop from "components/ui/BackDrop";

const Layout = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const selectedTheme = useSelector((state) => state.theme.selectedTheme);
  const dataFetchingStatus = useSelector(
    (state) => state.theme.dataFetchingStatus
  );

  useEffect(() => {
    if (location.pathname === "/home") {
      dispatch(fetchUserCurrentTheme(sessionStorage.getItem("userId")));
    }
  }, [dispatch, location]);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: selectedTheme ? selectedTheme : "light",
        },
      }),
    [selectedTheme]
  );
  return (
    <Aux>
      <main>
        <Backdrop open={dataFetchingStatus} />
        <ThemeProvider theme={theme}>
          <Paper style={{ height: "96vh" }}>
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
