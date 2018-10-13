import { injectGlobal } from "styled-components";

const globalStyles = () => injectGlobal`

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

export default globalStyles;
