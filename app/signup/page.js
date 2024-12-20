"use client";
import AlreadyAccount from "@/components/forms/AlreadyAccount";
import FormError from "@/components/forms/FormError";
import SignUpForm from "@/components/forms/SignUpForm";
import { GlobalContext } from "@/services/globalContext";
import { siteTitle } from "@/utils/content/site";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, signUp, error, user } = useContext(GlobalContext);
  const router = useRouter();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();

      const res = await signUp(name, email, password);

      if (res.status === 201) {
        router.push("/login");
      }
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    if (!!user) {
      router.push("/");
    }
  }, [user]);

  useEffect(() => {
    document.title = `Sign Up | ${siteTitle}`;
  }, []);

  return (
    <>
      <section className="flex flex-col items-center justify-between p-24">
        <section className="flex flex-col md:flex-row py-14">
          <section className="flex flex-col gap-8">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center">
              Sign Up
            </h1>
            <p className="text-gray-500 text-center max-w-[360px]">
              Join {siteTitle} to manage your movies and TV
            </p>
            {!!error.error && <FormError message={error.message} />}
            <SignUpForm
              name={name}
              handleNameChange={handleNameChange}
              email={email}
              handleEmailChange={handleEmailChange}
              password={password}
              handlePasswordChange={handlePasswordChange}
              handleSubmit={handleSignUp}
              loading={loading}
            />
            <AlreadyAccount
              text="Already have an account?"
              destination={`/login`}
              title="Login"
            />
          </section>
        </section>
      </section>
    </>
  );
};

export default SignUp;
