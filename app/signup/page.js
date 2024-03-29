"use client";
import LoadingBtn from "@/components/Buttons/LoadingBtn";
import PageTitle from "@/components/pageComponents/PageTitle";
import { GlobalContext } from "@/services/globalContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signUp, isLoggedIn } = useContext(GlobalContext);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    setLoading(true);
    const response = await signUp(name, email, password);

    if (response?.status === 201) {
      console.log("signed up!");
      setLoading(false);
    } else {
      setError(response.response.data.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/profile");
    }
  }, [isLoggedIn]);

  return (
    <div className="px-6 py-10">
      <div className="custom-container">
        <div className="flex flex-col items-center">
          <PageTitle title="Sign up" />
          {!!error && <p className="mt-4 text-red-600">{error}</p>}
          <div className="my-10">
            <form onSubmit={handleSignUp}>
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="px-2 py-2 border-2 border-solid border-slate-800 rounded"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="px-2 py-2 border-2 border-solid border-slate-800 rounded"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="px-2 py-2 border-2 border-solid border-slate-800 rounded"
                    />
                  </div>
                </div>
                <LoadingBtn title="Sign up" />
              </div>
              <p className="mt-2 text-right">
                Already have an account?{" "}
                <Link
                  href={`/login`}
                  className="underline hover:underline-offset-4"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
