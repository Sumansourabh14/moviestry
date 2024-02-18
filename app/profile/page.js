"use client";
import { GlobalContext } from "@/services/globalContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const Profile = () => {
  const { user, isLoggedIn } = useContext(GlobalContext);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn]);

  return (
    <div className="py-30">
      <div>{isLoggedIn ? <h1>{user?.name}</h1> : <p>Loading user...</p>}</div>
    </div>
  );
};

export default Profile;
