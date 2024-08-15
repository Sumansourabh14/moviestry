import Link from "next/link";

const AlreadyAccount = ({ text, destination, title }) => {
  return (
    <p className="text-sm">
      {text}{" "}
      <Link href={destination} className="text-blue-400">
        {title}
      </Link>
    </p>
  );
};

export default AlreadyAccount;
