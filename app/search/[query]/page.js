"use client";
import MediaCard from "@/components/cards/MediaCard";
import MovieCardSkeleton from "@/components/skeletons/MovieCardSkeleton";
import PageTitle from "@/components/text/PageTitle";
import { GlobalContext } from "@/services/globalContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import data from "@/utils/sampleContent/movieSearchDeadpool.json";
import { useRouter } from "next/navigation";
import SearchInput from "@/components/forms/SearchInput";
import { Button } from "@/components/ui/button";
import { siteTitle } from "@/utils/content/site";

const SearchQueryResult = ({ params }) => {
  const [data, setData] = useState([]);
  const [totalResults, setTotalResults] = useState(null);
  const searchQuery = params.query;
  const decodedQuery = decodeURI(params.query);
  const { searchMovies, loading } = useContext(GlobalContext);
  const [query, setQuery] = useState(decodedQuery);

  const router = useRouter();

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const encodedQuery = encodeURI(query);
    router.push(`/search/${encodedQuery}`);
  };

  useEffect(() => {
    let mounted = true;

    const fetchSearchData = async () => {
      const res = await searchMovies(searchQuery);

      if (mounted) {
        console.log(res);
        setData(res.data.results);
        setTotalResults(res.data.total_results);
      }
    };

    fetchSearchData();

    return () => {
      mounted = false;
    };
  }, [searchQuery]);

  return (
    <>
      <title>{`${decodedQuery} Search Result | ${siteTitle}`}</title>
      <section className="flex flex-col items-center justify-between p-24 min-h-[90vh]">
        <section className="flex flex-col md:flex-row py-8">
          <section className="flex flex-col items-center gap-8">
            <form onSubmit={handleClick}>
              <section className="flex gap-2 max-w-[500px] mx-auto">
                <SearchInput
                  query={query}
                  handleQueryChange={handleQueryChange}
                />
                <Button type="submit">Search</Button>
              </section>
            </form>
            <PageTitle title={`Search Result for "${decodedQuery}"`} />
            {loading ? (
              <MovieCardSkeleton />
            ) : data.length > 0 ? (
              <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {data.map((media) => (
                  <Link href={`/title/${media.id}`} key={media.id}>
                    <MediaCard
                      key={media.id}
                      posterPath={media.poster_path}
                      title={media.title}
                      releaseDate={media?.release_date}
                    />
                  </Link>
                ))}
              </section>
            ) : (
              <section>
                <p>Oops! No result found!</p>
              </section>
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export default SearchQueryResult;
