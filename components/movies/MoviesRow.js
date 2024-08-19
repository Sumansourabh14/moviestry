"use client";
import { GlobalContext } from "@/services/globalContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import MediaCard from "../cards/MediaCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const MoviesRow = ({ title, endpoint }) => {
  const [movies, setMovies] = useState([]);
  const { getMovies } = useContext(GlobalContext);

  useEffect(() => {
    let mounted = true;

    const fetchMovies = async () => {
      const res = await getMovies(endpoint);

      if (mounted) {
        setMovies(res.data.results);
      }
    };

    fetchMovies();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section style={{ maxWidth: "1400px" }}>
      <h2 className="text-3xl pb-4 font-bold">{title}</h2>

      <div>
        <Carousel className="w-full">
          <CarouselContent>
            {movies.map((movie) => (
              <CarouselItem key={movie.id} className="max-w-[220px] relative">
                <Link href={`/title/${movie.id}`}>
                  <MediaCard
                    key={movie.id}
                    posterPath={movie.poster_path}
                    title={movie.title}
                    releaseDate={movie.release_date}
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default MoviesRow;
