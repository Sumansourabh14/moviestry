"use client";
import AlreadyAccount from "@/components/forms/AlreadyAccount";
import FormError from "@/components/forms/FormError";
import LoginForm from "@/components/forms/LoginForm";
import { GlobalContext } from "@/services/globalContext";
import { siteTitle } from "@/utils/content/site";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login, error, user } = useContext(GlobalContext);
  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      await login(email, password);
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    if (!!user) {
      router.push("/user/dashboard");
    }
  }, [user]);

  return (
    <>
      <title>Login | {siteTitle}</title>
      <section className="flex flex-col items-center justify-between p-24">
        <section className="flex flex-col md:flex-row py-14">
          <section className="flex flex-col items-center gap-8">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              Login
            </h1>
            <p className="text-gray-500 text-center">
              Log in to your account and start managing your movies and TV
            </p>
            {!!error.error && <FormError message={error.message} />}
            <section>
              <LoginForm
                email={email}
                handleEmailChange={handleEmailChange}
                password={password}
                handlePasswordChange={handlePasswordChange}
                handleSubmit={handleLogin}
                loading={loading}
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
