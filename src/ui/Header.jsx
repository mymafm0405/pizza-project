import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1>React Fast Pizza Co.</h1>
      </Link>
      <SearchOrder />
    </header>
  );
}
