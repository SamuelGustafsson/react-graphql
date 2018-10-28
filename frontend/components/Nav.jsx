import React from "react";
import Link from "next/link";
import NavStyled from "./styles/NavStyles";

const Nav = () => {
  return (
    <NavStyled>
      <Link href="/">
        <a>shop</a>
      </Link>
      <Link href="/sell">
        <a>sell</a>
      </Link>
      <Link href="/signup">
        <a>sign up</a>
      </Link>
      <Link href="/orders">
        <a>orders</a>
      </Link>
      <Link href="/me">
        <a>account</a>
      </Link>
    </NavStyled>
  );
};

export default Nav;
