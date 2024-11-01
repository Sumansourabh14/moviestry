"use client";
import MediaCard from "@/components/cards/MediaCard";
import MovieCardSkeleton from "@/components/skeletons/MovieCardSkeleton";
import PageTitle from "@/components/text/PageTitle";
import { Button } from "@/components/ui/button";
import { GlobalContext } from "@/services/globalContext";
import { siteTitle } from "@/utils/content/site";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const Watched = () => {
  const [watched, setWatched] = useState([]);
  const { user, getUserWatched, loading } = useContext(GlobalContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  useEffect(() => {
    let mounted = true;

    const fetchWatched = async () => {
      const res = await getUserWatched();

      if (mounted) {
        setWatched(res.data.watched);
      }
    };

    fetchWatched();

    return () => {
      mounted = false;
    };
  }, [user]);

  useEffect(() => {
    document.title = `Already Watched | ${siteTitle}`;
  }, []);

  return (
    <section>
      <PageTitle title="Already Watched" />
      <section className="mt-4">
        {loading ? (
          <MovieCardSkeleton />
        ) : watched.length > 0 ? (
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {watched.map((media) => (
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
          <section className="flex flex-col gap-4">
            <p>You have not watched any movie or TV show.</p>
            <Button asChild>
              <Link href={`/movies`}>Add to your watched list!</Link>
            </Button>
          </section>
        )}
      </section>
    </section>
  );
};

export default Watched;
