import React from "react";
import "./navbar.css";

interface NavbarProps {
  brandName: string;
}

function Navbar({ brandName }: NavbarProps) {
  return <div className="navbar">{brandName}</div>;
}

export default Navbar;
