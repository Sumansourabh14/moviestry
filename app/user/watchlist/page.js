"use client";
import ViewToggle from "@/components/buttons/ViewToggle";
import MediaCard from "@/components/cards/MediaCard";
import MovieCardSkeleton from "@/components/skeletons/MovieCardSkeleton";
import MediaTable from "@/components/tables/MediaTable";
import PageTitle from "@/components/text/PageTitle";
import { Button } from "@/components/ui/button";
import { GlobalContext } from "@/services/globalContext";
import { siteTitle } from "@/utils/content/site";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const Watchlist = () => {
  const [watchList, setWatchList] = useState([]);
  const [view, setView] = useState("grid");
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
      <div className="flex justify-between items-center mt-4">
        <div>Browse your watchlist</div>
        <ViewToggle handleValueChange={(e) => setView(e)} />
      </div>

      <section className="mt-8">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16">
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
          </div>
        ) : !!watchList && watchList.length !== 0 ? (
          view === "grid" ? (
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
            <div>
              <MediaTable docs={watchList} userId={user?.id} />
            </div>
          )
        ) : (
          <section className="flex gap-4 flex-col">
            <p>Oops! There is nothing in your watchlist</p>
            <Button asChild>
              <Link href={`/movies`}>Add to watchlist now!</Link>
            </Button>
          </section>
        )}
      </section>
    </section>
  );
};

export default Watchlist;
