"use client";
import MediaCard from "@/components/cards/MediaCard";
import MovieCardSkeleton from "@/components/skeletons/MovieCardSkeleton";
import PageTitle from "@/components/text/PageTitle";
import { GlobalContext } from "@/services/globalContext";
import Link from "next/link";
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
              <MovieCardSkeleton />
            ) : watchList.length > 0 ? (
              <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {watchList.map((media) => (
                  <Link href={`/title/${media.mediaId}`} key={media._id}>
                    <MediaCard
                      key={media._id}
                      posterPath={media.poster_path}
                      title={media.title}
                      releaseDate={media.release_date}
                    />
                  </Link>
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
