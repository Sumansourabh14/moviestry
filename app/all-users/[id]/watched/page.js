"use client";
import MediaCard from "@/components/cards/MediaCard";
import MovieCardSkeleton from "@/components/skeletons/MovieCardSkeleton";
import PageTitle from "@/components/text/PageTitle";
import { GlobalContext } from "@/services/globalContext";
import { siteTitle } from "@/utils/content/site";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const UserWatchedList = ({ params }) => {
  const [watchedList, setWatchedList] = useState([]);
  const { getPublicUserWatchedList, loading } = useContext(GlobalContext);
  const userId = params.id;

  useEffect(() => {
    let mounted = true;

    const fetchWatchedList = async () => {
      const res = await getPublicUserWatchedList(userId);

      if (mounted) {
        setWatchedList(res.data.watched);
      }
    };

    fetchWatchedList();

    return () => {
      mounted = false;
    };
  }, [userId]);

  useEffect(() => {
    document.title = `Already Watched | ${siteTitle}`;
  }, []);

  return (
    <section className="flex flex-col mt-16 p-12 min-h-[90vh] max-w-[1400px] mx-auto">
      <PageTitle title={`Already Watched (${watchedList?.length})`} />
      <section className="mt-8">
        {loading ? (
          <MovieCardSkeleton />
        ) : watchedList.length > 0 ? (
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {watchedList.map((media) => (
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
            <p>The user have not watched any movie or TV show.</p>
          </section>
        )}
      </section>
    </section>
  );
};

export default UserWatchedList;
