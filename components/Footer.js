import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black w-full max-w-[1200px] mx-auto rounded-lg shadow-lg px-4 sm:px-6 py-8 my-2">
      <div className="flex items-center justify-between py-4 px-4">
        <div className="flex-shrink-0">
          <Link href="/" className="text-white text-xl font-bold">
            Moviestry.
          </Link>
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
            <Link
              href="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Movies
            </Link>
            <Link
              href="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              TV
            </Link>
            <Link
              href="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
          </div>
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
            <Link
              href="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
