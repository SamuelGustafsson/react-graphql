import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";
import { globalStyles, theme } from "../style";

// Takes theme as a prop so we can use it inside the injectGlobal for globalstyling.
globalStyles(theme);

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
