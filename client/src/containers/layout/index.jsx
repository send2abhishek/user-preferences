import React from "react";
import Aux from "hoc/Auxiliary";
import Header from "components/header/";
import Footer from "components/footer/";

const Layout = (props) => {
  return (
    <Aux>
      <main>
        <Header />
        <div>{props.children}</div>
        <Footer />
      </main>
    </Aux>
  );
};

export default Layout;
