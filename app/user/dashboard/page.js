"use client";
import StatLinkCard from "@/components/cards/StatLinkCard";
import PageTitle from "@/components/text/PageTitle";
import { GlobalContext } from "@/services/globalContext";
import { siteTitle } from "@/utils/content/site";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const Dashboard = () => {
  const {
    user,
    watchlistMedia,
    watchedMedia,
    totalWatchedTime,
    maxWatchedTime,
    minWatchedTime,
  } = useContext(GlobalContext);
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
      {!!user && (
        <h2 className="mt-4">Hi, {user?.name}! Welcome to your dashboard.</h2>
      )}

      <section className="my-8 flex flex-col sm:flex-row flex-wrap gap-4">
        <StatLinkCard
          title={"Watchlist"}
          description={watchlistMedia?.length}
          destination={"/user/watchlist"}
        />
        <StatLinkCard
          title={"Already watched"}
          description={watchedMedia?.length}
          destination={"/user/watched"}
        />
        <StatLinkCard
          title={"Total Minutes Watched"}
          description={totalWatchedTime}
          destination={"/user/watched"}
        />
        <StatLinkCard
          title={"Maximum Minutes"}
          description={maxWatchedTime}
          destination={"/user/watched"}
        />
        <StatLinkCard
          title={"Minimum Minutes"}
          description={minWatchedTime}
          destination={"/user/watched"}
        />
      </section>
    </section>
  );
};

export default Dashboard;
