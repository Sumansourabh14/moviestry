"use client";
import AlreadyAccount from "@/components/forms/AlreadyAccount";
import FormError from "@/components/forms/FormError";
import SignUpForm from "@/components/forms/SignUpForm";
import { GlobalContext } from "@/services/globalContext";
import postersData from "@/utils/sampleContent/moviePosters.json";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, signUp, error } = useContext(GlobalContext);
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

  return (
    <>
      <title>Sign Up | Moviestry</title>
      <section className="flex flex-col items-center justify-between p-24">
        <section className="flex flex-col md:flex-row py-14">
          <section className="flex flex-col items-center gap-8">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              Sign Up
            </h1>
            <p className="text-gray-500 text-center">
              Join Moviestry to manage your movies and TV
            </p>
            {!!error.error && <FormError message={error.message} />}
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
