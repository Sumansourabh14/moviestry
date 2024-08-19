"use client";
import { GlobalContext } from "@/services/globalContext";
import { CircleCheckBig, LayoutDashboard, List, LogOut } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  const { user, logout } = useContext(GlobalContext);

  return (
    <nav className="bg-black w-full max-w-[1200px] mx-auto fixed top-2 left-1/2 transform -translate-x-1/2 z-50 rounded-lg shadow-lg px-4 sm:px-6">
      <div className="flex items-center justify-between py-4 px-4">
        <div className="flex-shrink-0">
          <Link href="/" className="text-white text-xl font-bold">
            Moviestry.
          </Link>
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
            <Link
              href="/movies"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Movies
            </Link>
          </div>
        </div>
        <div className="hidden sm:block sm:ml-6">
          {!!user ? (
            <div className="flex space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="bg-white text-black hover:bg-slate-700 hover:text-white px-6 py-2 rounded-md text-sm font-medium">
                  {user.name}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[200px]">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link
                      href={`/dashboard`}
                      className="flex gap-1 items-center"
                    >
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href={`/user/watchlist`}
                      className="flex gap-1 items-center"
                    >
                      <List className="mr-2 h-4 w-4" />
                      <span>Watchlist</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href={`/user/watched`}
                      className="flex gap-1 items-center"
                    >
                      <CircleCheckBig className="mr-2 h-4 w-4" />
                      <span>Already Watched</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={logout}
                    className="text-red-500 hover:bg-black px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex space-x-4">
              <Link
                href="/login"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="text-gray-800 bg-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
