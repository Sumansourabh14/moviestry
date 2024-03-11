"use client";
import { GlobalContext } from "@/services/globalContext";
import Link from "next/link";
import { useContext } from "react";

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(GlobalContext);

  return (
    <div className="px-6 py-3 custom-container">
      <div className="flex items-center justify-between">
        <p className="font-leagueSpartan text-2xl">MovieStry</p>
        <nav>
          {isLoggedIn ? (
            <ul className="flex gap-6 items-center">
              <li>
                <button
                  className="bg-red-500 text-white px-6 py-2 rounded"
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            </ul>
          ) : (
            <ul className="flex gap-6 items-center">
              <li>
                <Link href={`/browse`}>Browse</Link>
              </li>
              <li>
                <Link href={`/signup`}>Sign up</Link>
              </li>
              <li>
                <Link
                  href={`/login`}
                  className="bg-black text-white px-6 py-2 rounded"
                >
                  Login
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
