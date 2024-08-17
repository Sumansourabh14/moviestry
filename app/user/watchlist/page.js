"use client";
import MediaCard from "@/components/cards/MediaCard";
import PageTitle from "@/components/text/PageTitle";
import { Skeleton } from "@/components/ui/skeleton";
import { GlobalContext } from "@/services/globalContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const Watchlist = () => {
  const [watchList, setWatchList] = useState([]);
  const { user, getUserWatchlist, loading } = useContext(GlobalContext);
  const router = useRouter();

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/login");
  //   }
  // }, [user]);

  useEffect(() => {
    let mounted = true;

    const fetchWatchlist = async () => {
      const res = await getUserWatchlist();

      if (mounted) {
        setWatchList(res.data.watchlist);
      }
    };

    fetchWatchlist();

    return () => {
      mounted = false;
    };
  }, [user]);

  return (
    <>
      <title>My Watchlist | Moviestry</title>
      <section className="flex flex-col items-center justify-between p-24 min-h-[90vh]">
        <section className="flex flex-col md:flex-row py-8">
          <section className="flex flex-col items-center gap-8">
            <PageTitle title="My Watchlist" />
            {loading ? (
              <div className="flex flex-col space-y-3">
                <Skeleton className="bg-gray-300 h-[280px] w-[220px] rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="bg-gray-300 h-4 w-[220px]" />
                  <Skeleton className="bg-gray-300 h-4 w-[200px]" />
                </div>
              </div>
            ) : watchList.length > 0 ? (
              <section>
                {watchList.map((media) => (
                  <MediaCard
                    key={media._id}
                    posterPath={media.poster_path}
                    title={media.title}
                    releaseDate={media.release_date}
                  />
                ))}
              </section>
            ) : (
              <section>
                <p>Oops! There is nothing in your watchlist</p>
              </section>
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default Watchlist;
