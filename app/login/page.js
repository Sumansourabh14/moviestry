"use client";
import AlreadyAccount from "@/components/forms/AlreadyAccount";
import LoginForm from "@/components/forms/LoginForm";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <>
      <title>Login | Moviestry</title>
      <section className="flex flex-col items-center justify-between p-24">
        <section className="flex flex-col md:flex-row py-14">
          <section className="flex flex-col items-center gap-8">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              Login
            </h1>
            <p className="text-gray-500">
              Log in to your account and start managing your movies and TV
            </p>
            <section>
              <LoginForm
                email={email}
                handleEmailChange={handleEmailChange}
                password={password}
                handlePasswordChange={handlePasswordChange}
                handleSubmit={handleLogin}
              />
            </section>
            <AlreadyAccount
              text="Don't have an account?"
              destination={`/signup`}
              title="Sign up"
            />
          </section>
        </section>
      </section>
    </>
  );
};

export default Login;
