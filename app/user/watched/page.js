"use client";
import MediaCard from "@/components/cards/MediaCard";
import PageLayout from "@/components/screens/PageLayout";
import MovieCardSkeleton from "@/components/skeletons/MovieCardSkeleton";
import { GlobalContext } from "@/services/globalContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const Watched = () => {
  const [watched, setWatched] = useState([]);
  const { user, getUserWatched, loading } = useContext(GlobalContext);
  const router = useRouter();

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/login");
  //   }
  // }, [user]);

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

  return (
    <PageLayout
      title={"Already Watched | Moviestry"}
      pageTitle={"Already Watched"}
    >
      <section>
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
          <section>
            <p>
              You have not watched any movie or TV show. Start watching now!
            </p>
          </section>
        )}
      </section>
    </PageLayout>
  );
};

export default Watched;
