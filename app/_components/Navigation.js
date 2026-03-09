import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <ul className="navigation">
      <li>
        <Link href="./">Home</Link>
      </li>
      <li>
        <Link href="./cabins">Cabinss</Link>
      </li>
      <li>
        <Link href="./about">About</Link>
      </li>
      <li>
        <Link href="./account">Account</Link>
      </li>
    </ul>
  );
}

export default Navigation;
