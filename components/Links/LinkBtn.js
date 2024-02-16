import Link from "next/link";

const LinkBtn = () => {
  return (
    <div>
      <Link
        href={`/signup`}
        className="bg-white text-black py-2 px-10 hover:bg-green-400"
      >
        Get started
      </Link>
    </div>
  );
};

export default LinkBtn;
