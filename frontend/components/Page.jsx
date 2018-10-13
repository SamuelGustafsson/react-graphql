import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";

injectGlobal`

/* import custom font */
@font-face {
  font-family: 'radnika_next';
  src: url("/static/radnikanext-medium-webfont.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

html {
  box-sizing: border-box;
  font-size: 10px;
}
*,*:before, *:after {
  box-sizing:inherit;
}

body {
  padding: 0;
  margin: 0;
  font-family: "radnika_next";
}
`;

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
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;
export default Page;
