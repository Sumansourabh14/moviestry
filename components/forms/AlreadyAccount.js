import Link from "next/link";

const AlreadyAccount = ({ destination, title }) => {
  return (
    <p>
      Already have an account?{" "}
      <Link href={destination} className="text-blue-400">
        {title}
      </Link>
    </p>
  );
};

export default AlreadyAccount;
