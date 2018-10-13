import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";

const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightGrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  boxShadow: "0 12px 24px 0 rgba(0,0,0,0.09)"
};
class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
          <Meta />
          <Header />
        <p>Im the page component</p>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
