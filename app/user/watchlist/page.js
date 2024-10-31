"use client";
import MediaCard from "@/components/cards/MediaCard";
import PageLayout from "@/components/screens/PageLayout";
import MovieCardSkeleton from "@/components/skeletons/MovieCardSkeleton";
import PageTitle from "@/components/text/PageTitle";
import { GlobalContext } from "@/services/globalContext";
import { siteTitle } from "@/utils/content/site";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const Watchlist = () => {
  const [watchList, setWatchList] = useState([]);
  const { user, getUserWatchlist, loading } = useContext(GlobalContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

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

  useEffect(() => {
    document.title = `My Watchlist | ${siteTitle}`;
  }, []);

  return (
    <section>
      <PageTitle title={"My Watchlist"} />
      <section className="mt-4">
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
  );
};

export default Watchlist;
