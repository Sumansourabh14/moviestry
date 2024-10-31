"use client";
import PageTitle from "@/components/text/PageTitle";
import { GlobalContext } from "@/services/globalContext";
import { siteTitle } from "@/utils/content/site";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const Dashboard = () => {
  const { user } = useContext(GlobalContext);
  const router = useRouter();

  useEffect(() => {
    document.title = `Dashboard | ${siteTitle}`;
  }, []);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  return (
    <section>
      <PageTitle title="Dashboard" />
      {!!user && <h2>Hi, {user?.name}!</h2>}
    </section>
  );
};

export default Dashboard;
