"use client";
import PageTitle from "@/components/text/PageTitle";
import { GlobalContext } from "@/services/globalContext";
import { useContext } from "react";

const Dashboard = () => {
  const { user } = useContext(GlobalContext);

  return (
    <>
      <title>Dashboard | Moviestry</title>
      <section className="flex flex-col items-center justify-between py-20 min-h-[90vh]">
        <section className="flex flex-col md:flex-row py-8">
          <section className="flex flex-col items-center gap-8">
            {!!user && <PageTitle title={`Hi, ${user?.name}!`} />}
          </section>
        </section>
      </section>
    </>
  );
};

export default Dashboard;
