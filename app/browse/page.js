"use client";
import PageTitle from "@/components/pageComponents/PageTitle";
import { getPopularMoviesAPI } from "@/services/tmdbAPI";
import { POSTER_URL } from "@/services/tmdbRequests";
import { useEffect, useState } from "react";

const Browse = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;

    const fetchMovies = async () => {
      setLoading(true);
      const response = await getPopularMoviesAPI();

      console.log(response);

      if (mounted) {
        if (response.code === "ERR_NETWORK") {
          setError("There was an error fetching the movies :(");
        }
        setPopularMovies(response?.data?.results);
        setLoading(false);
      }
    };

    fetchMovies();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="py-10 px-6">
      <div className="custom-container">
        <PageTitle title="Browse" />
        <div>
          {!!popularMovies ? (
            <div className="flex gap-4 overflow-x-auto">
              {popularMovies.map((movie) => (
                <div key={movie.id} className="flex-none">
                  <img
                    src={`${POSTER_URL}${movie.poster_path}`}
                    alt={movie.title}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <h3>{movie.title}</h3>
                </div>
              ))}
            </div>
          ) : loading ? (
            <p>loading...</p>
          ) : (
            <p>{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Browse;
