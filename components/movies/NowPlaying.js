"use client";
import data from "@/utils/sampleContent/nowPlaying.json";
import Link from "next/link";
import MediaCard from "../cards/MediaCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const NowPlaying = () => {
  const movies = data.results;

  return (
    <section style={{ maxWidth: "1400px" }}>
      <h2 className="text-3xl pb-4 font-bold">Now Playing</h2>

      <div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {movies.map((movie) => (
              <CarouselItem key={movie.id} className="basis-1/7 relative">
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

export default NowPlaying;
