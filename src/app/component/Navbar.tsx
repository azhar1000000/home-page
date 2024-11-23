import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="list-none justify-around flex flex-row bg-green-700 text-white text-2xl">
      <Link href="/"><li>home</li></Link>
      <Link href="/about"><li>about</li></Link>
      <Link href="/contact"><li>contact</li></Link>
    </div>
  );
};

export default Navbar;
