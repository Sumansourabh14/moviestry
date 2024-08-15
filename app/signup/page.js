"use client";
import AlreadyAccount from "@/components/forms/AlreadyAccount";
import SignUpForm from "@/components/forms/SignUpForm";
import Link from "next/link";
import { useEffect, useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    console.log(name, email, password);
  };

  return (
    <>
      <title>Sign Up | Moviestry</title>
      <section className="flex flex-col items-center justify-between p-24">
        <section className="flex flex-col md:flex-row py-14">
          <section className="flex flex-col items-center gap-8">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              Sign Up
            </h1>
            <p className="text-gray-500">
              Join Moviestry to manage your movies and TV
            </p>
            <section>
              <SignUpForm
                name={name}
                handleNameChange={handleNameChange}
                email={email}
                handleEmailChange={handleEmailChange}
                password={password}
                handlePasswordChange={handlePasswordChange}
                handleSubmit={handleSignUp}
              />
            </section>
            <AlreadyAccount destination={`/login`} title="Login" />
          </section>
        </section>
      </section>
    </>
  );
};

export default SignUp;
