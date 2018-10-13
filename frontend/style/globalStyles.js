import { injectGlobal } from "styled-components";

// Takes theme as a prop so we can use it inside the injectGlobal for globalstyling.
const globalStyles = theme => injectGlobal`

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

  /* Set fontsize to eqivalent 15px */
  font-size: 1.5rem;
  line-height: 2;
  font-family: "radnika_next";
}

a {
  text-decoration: none;
color: ${theme.black};
}
`;

export default globalStyles;
