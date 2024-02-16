import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="px-6 py-3 custom-container">
      <div className="flex items-center justify-between">
        <p className="font-leagueSpartan text-2xl">MovieStry</p>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href={`/signup`}>Sign up</Link>
            </li>
            <li>
              <Link href={`/login`} className="bg-black text-white px-6 py-2">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
