import React from "react";
import Link from "next/link";
import NavStyled from "./styles/NavStyles";

const Nav = () => {
  return (
    <NavStyled>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/sell">
        <a>Sell</a>
      </Link>
    </NavStyled>
  );
};

export default Nav;
